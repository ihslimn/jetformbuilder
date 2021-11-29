<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic;

use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Connectors;

class Pay_Now extends Scenario_Logic_Base implements With_Resource_It {

	use Set_Status_Trait;
	use Scenarios_Connectors\Pay_Now;

	protected function query_token() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return sanitize_text_field( wp_unslash( $_GET['token'] ?? '' ) );
	}

	public function get_failed_statuses() {
		return array( 'VOIDED' );
	}

	/**
	 * @return void
	 * @throws Gateway_Exception
	 */
	public function process_before() {
		$this->set_gateway_data();

		/**
		 * Create payment by /v2/checkout/orders
		 */
		$payment = $this->create_resource();

		/**
		 * By default save payment id & form data to inserted post meta
		 */
		$this->save_resource( $payment );

		/**
		 * Redirect to Paypal checkout for approve payment
		 */
		$this->redirect_to_checkout( $payment );
	}

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function create_resource() {
		$payment = ( new Actions\Pay_Now_Action() )
			->set_bearer_auth( $this->controller->get_order_token() )
			->set_app_context(
				array(
					'return_url' => $this->get_success_url(),
					'cancel_url' => $this->get_failed_url(),
				)
			)
			->set_units(
				array(
					$this->controller->get_order_id() => array(
						'currency_code' => $this->controller->current_gateway( 'currency' ),
						'value'         => $this->controller->get_price_var(),
					),
				)
			)
			->send_request();

		if ( empty( $payment['id'] ) ) {
			throw new Gateway_Exception( $payment['message'], $payment );
		}

		return $payment;
	}

	public function save_resource( $payment ) {
		update_post_meta(
			$this->controller->get_order_id(),
			Paypal\Controller::GATEWAY_META_KEY,
			wp_json_encode(
				array(
					'gateway_id' => $this->controller->get_id(),
					'payment_id' => $payment['id'],
					'scenario'   => self::scenario_id(),
					'order_id'   => $this->controller->get_order_id(),
					'form_id'    => $this->get_action_handler()->form_id,
					'form_data'  => $this->get_action_handler()->request_data,
					'resource'   => $payment,
					'provider'   => 'jet-form-builder',
				),
				JSON_UNESCAPED_UNICODE
			)
		);
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public function process_after() {
		return ( new Actions\Capture_Payment_Action() )
			->set_bearer_auth( $this->controller->get_current_token() )
			->set_order_id( $this->get_queried_token() )
			->send_request();
	}


	/**
	 * @throws Gateway_Exception
	 */
	public function process_save() {
		$this->set_payment_status();
		$this->set_payment_amount();
		$this->set_payer();
	}

	private function set_payment_amount() {
		$payment = $this->controller->get_payment();

		if ( empty( $payment['purchase_units'][0]['payments']['captures'] ) ) {
			return;
		}
		$this->controller->set_post_meta(
			'amount',
			$payment['purchase_units'][0]['payments']['captures'][0]['amount'] ?? 0
		);
	}

	private function set_payer() {
		$payment = $this->controller->get_payment();

		if ( empty( $payment['payer'] ) ) {
			return;
		}
		$this->controller->set_post_meta(
			'payer',
			array(
				'first_name' => $payment['payer']['name']['given_name'] ?? '',
				'last_name'  => $payment['payer']['name']['surname'] ?? '',
				'email'      => $payment['payer']['email_address'] ?? '',
			)
		);
	}

	public function set_gateway_data() {
		$this->controller->set_order_id();
		$this->controller->set_price_field();
		$this->controller->set_price_from_filed();
		$this->controller->set_current_gateway_options();
		$this->controller->set_order_token();
	}
}
