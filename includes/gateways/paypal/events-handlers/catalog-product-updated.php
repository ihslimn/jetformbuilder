<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

class Catalog_Product_Updated extends Base\Event_Handler_Base {

	public static function get_event_type() {
		return 'CATALOG.PRODUCT.UPDATED';
	}

}
