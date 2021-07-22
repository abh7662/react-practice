
import React from "react"


export default function App() {
    // const getCount = (value, arr) => {
    //     const newArr = arr.filter(val => val === value)
    //     return newArr.length
    // }
    // const encode = (string) => {
    //     const StrArr = string.split('')
    //     const uniqueStrArr = [... new Set(StrArr)]
    //     let result = []
    //     for (let x of uniqueStrArr) {
    //         result.push(getCount(x, StrArr))
    //         result.push(x)
    //     }
    //     return result.join('')
    // }

    // const decode = (string) => {
    //     const strArr = string.split('')
    //     let result = ''
    //     for (let i = 0; i < strArr.length; i + 2) {
    //         // console.log(strArr[i])
    //         // console.log(strArr[i + 1])
    //     }
    // }


    // console.log(encode('wwwiiuuuu')) // 3w2i4u
    // console.log(decode('2u3a4o')) // uuaaaoooo 

    const encode = (string) => {
        return string.replace(/(\w)\1+/g, (m, v) => `${m.length}${v}`)
    }

    const decode = (string) => {
        return string.replace(/(\d+)(\w)/g, (x, y, z) => z.repeat(y))
    }


    console.log(encode('wwwwwwwwiiuuuu')) // 3w2i4u
    console.log(decode('2u3a4o')) // uuaaaoooo 
    return (
        <div>
            hello
        </div>
    )
}