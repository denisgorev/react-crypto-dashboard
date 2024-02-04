import {cryptoAssets, cryptoData} from './data'

export const fakeFetchCrypto = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 20)
    })
}

export const fakeFetchAssets = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 20)
    })
}