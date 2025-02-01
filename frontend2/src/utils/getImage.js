import bsc from '@/img/png/bsc.png';
import eth from '@/img/png/eth.png';
import matic from '@/img/png/matic.png';
import op from '@/img/png/op.png';
import arb from '@/img/svg/arb.svg';
import Image from 'next/image';

export const getImage = (asset, width, height) => {
    if (asset.includes('bsc'))
        return <Image src={bsc} width={width} height={height}/>
    if (asset.includes('eth'))
        return <Image src={eth} width={width} height={height}/>
    if (asset.includes('matic'))
        return <Image src={matic} width={width} height={height}/>
    if (asset.includes('op'))
        return <Image src={op} width={width} height={height}/>
    if (asset.includes('arb'))
        return <Image src={arb} width={width} height={height}/>
}