<template>
	<div style="display:inline-block;">
		<cx-vui-button
			@click="onClick"
			button-style="link-accent"
			size="mini"
		>
			<template #label>
				<span class="dashicons dashicons-database-export"></span>
				{{ __( 'Export', 'jet-form-builder' ) }}
			</template>
		</cx-vui-button>
		<CxVuiPopup
			v-if="showPopup"
			:class-names="{
				'export-popup': true,
				'sticky-footer': true,
				'sticky-header': true,
			}"
			@close="showPopup = false"
		>
			<template #title>{{ __( 'Export settings', 'jet-form-builder' ) }}</template>
			<template #content>
				<cx-vui-select
					:options-list="formFilter.options || []"
					:wrapper-css="[ '1-x-2' ]"
					size="fullwidth"
					:value="selectedForm"
					:label="__( 'Export record from', 'jet-form-builder' )"
					:placeholder="__( 'You need to select form', 'jet-form-builder' )"
					@input="setForm"
					name="select_form"
				/>
				<template v-if="selectedForm">
					<RowWrapper
						element-id="fields"
						:class-names="{ 'size--1-x-2': true }"
						:state="fieldState"
					>
						<template #label>{{ __( 'Export fields', 'jet-form-builder' ) }}</template>
						<template #default>
							<CxVuiFSelect
								:wrapper-css="[ 'jfb-loading-select', 'jfb-padding-b-unset' ]"
								:options-list="currentFields"
								:multiple="true"
								:value="selectedFields"
								:placeholder="placeholder"
								:disabled="isLoading( 'fields' ) || currentFields.length === 1"
								@change="updateSelectedFields"
							/>
						</template>
					</RowWrapper>
					<div class="jfb-inline-control-actions">
						<cx-vui-button
							button-style="link-accent"
							size="link"
							tagName="a"
							:disabled="currentFieldsValues.length === selectedFields.length"
							@click="selectAllFields"
						>
							<template #label>
								{{ __( 'Choose all', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
						<cx-vui-button
							button-style="link-error"
							size="link"
							tagName="a"
							:disabled="!selectedFields.length"
							@click="clearAllFields"
						>
							<template #label>
								{{ __( 'Clear', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
					</div>
					<hr class="jfb"/>
					<RowWrapper
						element-id="extra"
						:class-names="{ 'size--1-x-2': true }"
						:state="extraState"
					>
						<template #label>{{ __( 'Additional information', 'jet-form-builder' ) }}</template>
						<template #default>
							<CxVuiFSelect
								:wrapper-css="[ 'jfb-padding-b-unset' ]"
								:options-list="extra"
								:multiple="true"
								:value="selectedExtra"
								@change="updateSelectedExtra"
							/>
						</template>
					</RowWrapper>
					<div class="jfb-inline-control-actions">
						<cx-vui-button
							button-style="link-accent"
							size="link"
							tagName="a"
							:disabled="extraValues.length === selectedExtra.length"
							@click="selectAllExtra"
						>
							<template #label>
								{{ __( 'Choose all', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
						<cx-vui-button
							button-style="link-error"
							size="link"
							tagName="a"
							:disabled="!removableSelectedExtra.length"
							@click="clearAllExtra"
						>
							<template #label>
								{{ __( 'Clear', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
					</div>
					<h3>{{ __( 'Filter records', 'jet-form-builder' ) }}</h3>
					<hr class="jfb"/>
					<cx-vui-select
						:label="__( 'Status', 'jet-form-builder' )"
						:wrapper-css="[ '1-x-2' ]"
						:options-list="statusFilter.options"
						size="fullwidth"
						name="status"
						:value="status"
						@input="setStatus"
					/>
					<hr class="jfb"/>
					<div class="jfb-dates-wrapper">
						<ColumnWrapper element-id="date_from">
							<template #label>{{ __( 'Date from', 'jet-form-builder' ) }}</template>
							<CxVuiDate
								:value="dateFrom"
								@input="setDateFrom"
								max-date="now"
							/>
						</ColumnWrapper>
						<ColumnWrapper element-id="date_to">
							<template #label>{{ __( 'Date to', 'jet-form-builder' ) }}</template>
							<CxVuiDate
								:value="dateTo"
								@input="setDateTo"
								max-date="now"
							/>
						</ColumnWrapper>
					</div>
				</template>
			</template>
			<template #footer>
				<cx-vui-button
					:button-style="'accent'"
					:size="'mini'"
					:disabled="!canBeExported"
					:loading="exportEntries"
					@click="startExport"
				>
					<template #label>{{ __( 'Export', 'jet-form-builder' ) }}</template>
				</cx-vui-button>
				<cx-vui-button
					:size="'mini'"
					@click="showPopup = false"
				>
					<template #label>{{ __( 'Cancel', 'jet-form-builder' ) }}</template>
				</cx-vui-button>
			</template>
		</CxVuiPopup>
		<iframe
			v-if="exportEntries"
			ref="exportFrame"
			:src="iframeSrc"
			style="display:none;"
			@load="onDoneExport"
			@error="onDoneExport( true )"
		></iframe>
	</div>
</template>

<script>

const {
	      __,
      } = wp.i18n;

const {
	      i18n,
	      ScopeStoreMixin,
	      GetIncoming,
      } = JetFBMixins;

const {
	      mapState,
	      mapGetters,
	      mapMutations,
	      mapActions,
      } = Vuex;

const {
	      RowWrapper,
	      ColumnWrapper,
	      CxVuiPopup,
	      CxVuiFSelect,
	      CxVuiDate,
      } = JetFBComponents;

const {
	      export_url,
      } = window.JetFBPageConfig;

const {
	      addQueryArgs,
      } = JetFBActions;

export default {
	name: 'ExportEntriesButton',
	components: {
		RowWrapper,
		ColumnWrapper,
		CxVuiPopup,
		CxVuiFSelect,
		CxVuiDate,
	},
	props: {
		label: {
			type: String,
		},
	},
	data: () => (
		{
			showPopup: false,
			exportEntries: false,
		}
	),
	mixins: [
		ScopeStoreMixin,
		i18n,
	],
	computed: {
		...mapGetters( [
			'export/selectedForm',
			'export/currentFields',
			'export/selectedFields',
			'export/isLoading',
			'export/currentFieldsValues',
			'export/extra',
			'export/extraValues',
			'export/selectedExtra',
			'export/statusesList',
			'export/status',
			'export/dateFrom',
			'export/dateTo',
			'export/removableSelectedExtra',
		] ),
		formFilter() {
			return this.getter( 'getFilter', 'form' );
		},
		statusFilter() {
			return this.getter( 'getFilter', 'status' );
		},
		filtersObj() {
			jfbEventBus.reactiveCounter;

			return this.getter( 'filtersObj' );
		},
		currentFields() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/currentFields' ];
		},
		selectedFields() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/selectedFields' ] ?? [];
		},
		selectedForm() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/selectedForm' ] ?? '';
		},
		currentFieldsValues() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/currentFieldsValues' ];
		},
		placeholder() {
			if ( this.selectedFields.length > 0 ) {
				return '';
			}

			return __( 'Please select one or many fields', 'jet-form-builder' );
		},
		extra() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/extra' ];
		},
		extraValues() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/extraValues' ];
		},
		selectedExtra() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/selectedExtra' ];
		},
		status() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/status' ];
		},
		statusesList() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/statusesList' ];
		},
		dateFrom() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/dateFrom' ];
		},
		dateTo() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/dateTo' ];
		},
		removableSelectedExtra() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/removableSelectedExtra' ];
		},
		isEmptyProperties() {
			return !this.selectedFields?.length && !this.selectedExtra?.length;
		},
		canBeExported() {
			return (
				this.selectedForm &&
				!this.isLoading() &&
				!this.isEmptyProperties
			);
		},
		fieldState() {
			if ( this.isLoading( 'fields' ) ) {
				return {
					type: 'loading',
					message: __( 'Loading...', 'jet-form-builder' ),
				};
			}
			if ( this.isEmptyProperties ) {
				return {
					type: 'warning-danger',
					message: __( 'Please fill this field', 'jet-form-builder' ),
				};
			}

			return '';
		},
		extraState() {
			if ( !this.isEmptyProperties ) {
				return '';
			}

			return {
				type: 'warning-danger',
				message: __( 'Please fill this field', 'jet-form-builder' ),
			};
		},
		iframeSrc() {
			return addQueryArgs(
				{
					fields: this.selectedFields,
					extra: this.selectedExtra,
					filters: this.filtersObj
				},
				export_url,
			);
		},
	},
	methods: {
		...mapMutations( 'export', [
			'setForm',
			'updateSelectedFields',
			'updateSelectedExtra',
			'setStatus',
			'setDateFrom',
			'setDateTo',
		] ),
		...mapActions( 'export', [
			'resolveFields',
			'selectAllFields',
			'clearAllFields',
			'selectAllExtra',
			'clearAllExtra',
		] ),
		onClick() {
			this.showPopup = true;
			this.resolveFields();
		},
		startExport() {
			this.exportEntries = true;
		},
		onDoneExport( isError ) {
			this.showPopup = false;

			const notice = {
				duration: 3000,
				message: __( 'Form Records exported successfully', 'jet-form-builder' ),
				type: 'success',
			};

			if ( isError ) {
				const iframe       = this.$refs.exportFrame;
				const messageNode  = iframe.contentWindow.document.body.querySelector( '.wp-die-message' );
				const errorMessage = messageNode?.childNodes?.[ 0 ]?.textContent;

				notice.type    = 'error';
				notice.message = errorMessage || __( 'Undefined critical error', 'jet-form-builder' );
			}

			jfbEventBus.$CXNotice.add( notice );

			// remove iframe
			this.exportEntries = false;
		},
		isLoading( type ) {
			return this[ 'export/isLoading' ]( type );
		},
	},
};
</script>

<style lang="scss">
.cx-vui-component {
	&--1-x-2 {
		.cx-vui-component__meta {
			flex: 1;
		}

		.cx-vui-component__control {
			flex: 2;
		}
	}

	&--jfb-loading-select {
		.cx-vui-component__control {
			display: flex;
			gap: 10px;
			align-items: flex-end;

			& > *:first-child {
				flex: 1 1 auto;
			}
		}
	}

	&--jfb-padding-b-unset {
		padding-bottom: 0.2em;
	}
}

.jfb-inline-control-actions {
	display: flex;
	justify-content: flex-end;
	gap: 1em;
	padding: 0 20px 20px 0;
}

hr.jfb {
	border: 0;
	border-top: 1px solid #ECECEC;
	margin: unset;
}

.jfb-dates-wrapper {
	display: flex;
}

.cx-vui-popup.export-popup {
	.cx-vui-popup {
		&__body {
			width: 65vw;
		}
	}
}
</style>