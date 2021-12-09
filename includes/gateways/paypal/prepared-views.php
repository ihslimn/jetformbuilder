<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Classes\Table_View_Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Gateways\Paypal\Api_Actions\Show_Plan_Details_Action;

class Prepared_Views {

	/**
	 * @param $subscription_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_subscription_raw( $subscription_id ): array {
		return ( new Query_Builder() )
			->set_view(
				( new Paypal\Query_Views\Paypal_Subscriptions_Find_View() )
					->find_by( 'subscription_id', $subscription_id )
			)
			->query_one();
	}

	private static function get_condition_type_by_sort( string $sort ): string {
		switch ( $sort ) {
			case View_Base::FROM_HIGH_TO_LOW:
				return 'less_static';
			case View_Base::FROM_LOW_TO_HIGH:
				return 'more_static';
			default:
				return '';
		}
	}

	/**
	 * @param array $args
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_subscriptions_raw( array $args = array() ): array {
		$args = array_merge(
			array(
				'limit'      => 25,
				'extreme_id' => 0,
				'sort'       => View_Base::FROM_HIGH_TO_LOW,
			),
			$args
		);

		$conditions = array();

		if ( $args['extreme_id'] ) {
			$conditions[] = array(
				'type'   => self::get_condition_type_by_sort( $args['sort'] ),
				'values' => array(
					'meta_id',
					$args['extreme_id'],
				),
			);
		}

		return ( new Query_Builder() )
			->set_view(
				( new Paypal\Query_Views\Paypal_Subscriptions_View() )
					->set_limit( array( $args['limit'] ) )
					->set_conditions( $conditions )
			)
			->debug()
			->query_all();
	}


	/**
	 * @param array $subscriptions_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_subscriptions_raw_by_id( array $subscriptions_id ): array {
		$view = new Paypal\Query_Views\Paypal_Subscriptions_View();
		$view->set_limit( array( count( $subscriptions_id ) ) );

		$conditions = array(
			array(
				'type'   => 'equal_static',
				'values' => array( 1, 1 ),
			),
		);

		foreach ( $subscriptions_id as $payment_id => $search_id ) {
			$conditions[] = array(
				'type'   => 'like',
				'values' => array(
					'meta_value',
					$view->json_pair( 'subscription_id', $search_id ),
				),
			);
		}
		$view->set_custom_conditions( $conditions );

		return ( new Query_Builder() )
			->set_view( $view )
			->debug()
			->query_all();
	}

	/**
	 * @param $subscription_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_subscription( $subscription_id ): array {
		$raw_subscription = self::get_subscription_raw( $subscription_id );

		return ( new Scenarios_Views\Subscribe_Now() )->prepare_record( $raw_subscription );
	}

	/**
	 * @param $subscription_id
	 *
	 * @return array
	 */
	public static function get_subscription_raw_safe( $subscription_id ): array {
		try {
			return self::get_subscription_raw( $subscription_id );
		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public static function count_subscriptions(): int {
		try {
			return (int) ( new Query_Builder() )
				->set_view( new Paypal\Query_Views\Subscriptions_Count() )
				->debug()
				->query_var();

		} catch ( Query_Builder_Exception $exception ) {
			return 0;
		}
	}

	/**
	 * @param $payment_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_payment_raw( $payment_id ): array {
		return ( new Query_Builder() )
			->set_view(
				( new Paypal\Query_Views\Recurring_Payment_Find_View() )
					->find_by( 'payment_id', $payment_id )
			)
			->debug()
			->query_one();
	}

	/**
	 * @param $payment_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_payment( $payment_id ): array {
		$raw_payment = self::get_payment_raw( $payment_id );

		return ( new Scenarios_Views\Recurring_Payments() )->prepare_record( $raw_payment );
	}

	/**
	 * @param string $token
	 * @param string $plan_id
	 *
	 * @throws Gateway_Exception
	 */
	public static function get_plan_by_id( string $token, string $plan_id ) {
		return ( new Show_Plan_Details_Action() )
			->set_bearer_auth( $token )
			->set_path(
				array(
					'plan_id' => $plan_id
				)
			)
			->send_request();
	}

	/**
	 * @param string $token
	 * @param string $product_id
	 *
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public static function get_product_by_id( string $token, string $product_id ) {
		return ( new Paypal\Api_Actions\Show_Product_Details() )
			->set_bearer_auth( $token )
			->set_path(
				array(
					'product_id' => $product_id,
				)
			)
			->send_request();
	}

	public static function get_notes_by_id( $post_id ) {
		$notes = array_reverse( get_post_meta( $post_id, Scenarios_Manager::NOTES_KEY ) );

		return array_map( function ( $item ) {
			$parsed               = Tools::decode_json( $item );
			$parsed['created_dt'] = gmdate( 'M d Y H:i:s', $parsed['created_dt'] );

			return $parsed;
		}, $notes );
	}


}
