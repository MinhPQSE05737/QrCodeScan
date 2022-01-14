import React, { Component, useState, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

const ProductScanRNCamera = () => {
    return (
        <RNCamera
                 flashMode={RNCamera.Constants.FlashMode.on}
                 type={RNCamera.Constants.Type.back}
                captureAudio={false}
            >
          {/* <BarcodeMask width={300} height={500} edgeBorderWidth={0.5} /> */}

       </RNCamera>
    )
 }

 export default ProductScanRNCamera;