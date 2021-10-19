<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;


class Payment_Sale_Completed extends Event_Handler_Base {

	public function get_event_type() {
		return 'PAYMENT.SALE.COMPLETED';
	}

	public function on_catch_event() {
		// TODO: Implement on_catch_event() method.
	}
}