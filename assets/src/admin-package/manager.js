import ApiInputError from './input-error';
import CxVuiCollapseMini from './components/CxVuiCollapseMini';
import GetIncoming from './mixins/GetIncoming';
import SaveTabByAjax from './mixins/SaveTabByAjax';
import EntriesTable from './components/EntriesTable';
import DetailsTable from './components/DetailsTable';
import DetailsTableWithStore from './components/DetailsTableWithStore';
import i18n from './mixins/i18n';
import { renderCurrentPage } from './functions/RenderCurrentPage';
import CopyButton from './components/CopyButton';
import * as ChooseColumn from './entries-table-columns/choose';
import { getCurrentPath, getSearch, createPath } from './functions/LocationManager';

window.JetFBActions = {
	renderCurrentPage,
	getCurrentPath,
	getSearch,
	createPath,
};

window.JetFBErrors = {
	ApiInputError,
};

window.JetFBComponents = {
	CxVuiCollapseMini,
	EntriesTable,
	DetailsTable,
	CopyButton,
	DetailsTableWithStore,
	ChooseColumn,
};

window.JetFBMixins = {
	GetIncoming,
	SaveTabByAjax,
	i18n,
};