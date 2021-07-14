import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"
import Toggler from "./Toggler"

function App() {
    var removeElement = function (nums, val) {

        let k = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                nums[i] = nums[i + 1]
                k++
                if (nums[i + 1] === val) {
                    i--
                }
            }
        }
        console.log(nums)
        console.log(k)
        return k

    };

    removeElement([1, 2, 2, 2, 3], 2)
    return (
        <div>
            <Menu />
            <hr />
            <Favorite />
            {/* <Toggler defaultOnValue={true} render={
                (on, toggle) => {
                    return (
                        <Menu on={on} toggle={toggle} />
                    )
                }
            } />

            <hr />
            <Toggler defaultOnValue={false} render={
                (on, toggle) => {
                    return (
                        <Favorite on={on} toggle={toggle} />
                    )
                }
            } /> */}

        </div>
    )
}

export default App