import { shallowMount } from "@vue/test-utils";
import LocationDotIcon from "@/components/icons/LocationDotIcon.vue";

describe("LocationDotIcon.vue", () => {
    it("should define vue instance when rendered", () => {
        const wrapper = shallowMount(LocationDotIcon);
        expect(wrapper.vm).toBeDefined()
    });
});
