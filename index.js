import bsGrid from './components/bs-grid';
import bsRow from './components/bs-row';
import bsCol from './components/bs-col';

export default {
	install(Vue) {
		Vue.component('BsGrid', bsGrid);
		Vue.component('BsRow', bsRow);
		Vue.component('BsCol', bsCol);
	},
};
