import { shallowMount } from "@vue/test-utils";
import HeartIcon from "@/components/icons/HeartIcon.vue";

describe("HeartIcon.vue", () => {
    it("should define vue instance when rendered", () => {
        const wrapper = shallowMount(HeartIcon);
        expect(wrapper.vm).toBeDefined()
    });
});
