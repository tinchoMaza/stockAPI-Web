export const hexToRgba = (hex,a) => { 
    console.log(hex,a)
    // debugger
    if (hex.length > 7) return
    var rHex = hex.slice(1, 3)
    var gHex = hex.slice(3, 5)
    var bHex = hex.slice(5, 7)
    var r = parseInt(`0x${rHex}`)
    var g = parseInt(`0x${gHex}`)
    var b = parseInt(`0x${bHex}`)
    console.log(`rgba(${r},${g},${b},${a})`)
    return `rgba(${r},${g},${b},${a})`
}
