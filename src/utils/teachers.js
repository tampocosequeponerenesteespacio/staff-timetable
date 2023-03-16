import { TEACHERS } from './teachers-data'

const ALL = TEACHERS.split('-')

const LPI = ALL[0].split(';')
const ISA = ALL[1].split(';')
const RAG = ALL[2].split(';')
const XMU = ALL[3].split(';')
const CCA = ALL[4].split(';')
const CKR = ALL[5].split(';')
const FGR = ALL[6].split(';')
const LGR = ALL[7].split(';')
const MAG = ALL[8].split(';')
const MTO = ALL[9].split(';')
const NRE = ALL[10].split(';')
const POR = ALL[11].split(';')

export const SCI = [LPI, ISA, RAG, XMU, CCA, CKR, FGR, LGR, MAG, MTO, NRE, POR]
export const CHE = [LPI, ISA, RAG, XMU]
export const BIO = [CCA, CKR, FGR, LGR]
export const PHY = [MAG, MTO, NRE, POR]
