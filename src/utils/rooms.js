import { ROOMS } from "./rooms-data";

const ALL = ROOMS.split(`"\n"`)

const F11 = ALL[0].split(';')
const F12 = ALL[0].split(';')
const F21 = ALL[0].split(';')
const F22 = ALL[0].split(';')
const G24 = ALL[0].split(';')
const H22 = ALL[0].split(';')
const H23 = ALL[0].split(';')
const H24 = ALL[0].split(';')

export const ALLROOMS = [F11, F12, F21, F22, G24, H22, H23, H24]
