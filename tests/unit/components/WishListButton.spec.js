import { shallowMount } from "@vue/test-utils";
import WishListButton from "@/components/WishListButton.vue";

describe('WishListButton.vue', () => {
    it("should define vue instance when rendered", () => {
        const wrapper = shallowMount(WishListButton);
        expect(wrapper.vm).toBeDefined();
    });

    describe('Methods', () => {
        it("emitButtonClick should emit 'buttonClick' with false value if is Wish List page", () => {
            const wrapper = shallowMount(WishListButton, {
                propsData: { isWishList: true }
            });
            wrapper.vm.emitButtonClick()
            expect(wrapper.emitted().buttonClick).toBeTruthy()
            expect(wrapper.emitted().buttonClick[0]).toEqual([false])
        });

        it("emitButtonClick should emit 'buttonClick' with opposite value of buttonActive if is not Wish List page", () => {
            const wrapper = shallowMount(WishListButton, {
                propsData: { isWishList: false }
            });
            const buttonActiveValue = false
            wrapper.vm.emitButtonClick()
            wrapper.vm.buttonActive = buttonActiveValue
            expect(wrapper.emitted().buttonClick).toBeTruthy()
            expect(wrapper.emitted().buttonClick[0]).toEqual([!buttonActiveValue])
        });
    })
})