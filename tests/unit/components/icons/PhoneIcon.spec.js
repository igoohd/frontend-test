import { shallowMount } from "@vue/test-utils";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";

describe("PhoneIcon.vue", () => {
    it("should define vue instance when rendered", () => {
        const wrapper = shallowMount(PhoneIcon);
        expect(wrapper.vm).toBeDefined()
    });
});
