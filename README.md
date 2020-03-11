# Плагин пока полностью не готов!
скоро начну

# vue-bootstrap-clean-grid-plugin
VueJS Bootstrap grid plugin (clean)

## Установка

```sh
npm install vue-bootstrap-clean-grid-plugin
```

## Активация плагина
```js
import Vue from 'vue';
import VueBootstrapGrid from 'vue-bootstrap-clean-grid-plugin';


Vue.use(VueBootstrapGrid);

```

## Пример использование плагина

```vue
<bs-grid>
	<bs-row>
		<bs-col :xs="12" :sm="6" :md="4" :xl="3" v-for="n in 12">
			<div class="card">Col</div>
		</bs-col>
	</bs-row>
</bs-grid>

```
