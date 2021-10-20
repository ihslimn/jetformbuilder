<?php

namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;


class Paypal_Subscription_Global_Endpoint extends Rest_Api_Endpoint_Base {

	use Paypal\Actions\List_Webhook_Trait;
	use Paypal_Subscription_Base_Trait;

	public static function get_rest_base() {
		return 'paypal-subscription';
	}

	public function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return mixed|string
	 * @throws Gateway_Exception
	 */
	public function get_token( \WP_REST_Request $request ) {
		return Paypal\Controller::get_token_global();
	}
}