import { reactive } from 'vue';

export const store = reactive({
    getImagePath: function (imgPath) {
        return new URL(`./assets/${imgPath}.png`, import.meta.url).href;
    }
});