import React from 'react'
import Svg, { Path } from "react-native-svg"

function BackButton(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            fill={props.color}

            viewBox='0 0 42 42'
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
        >
            <Path
                fillRule="evenodd"
                d="M27.066 1 7 21.068l19.568 19.569 4.934-4.933-14.637-14.636L32 5.933z"
            />
        </Svg>
    )
}

export default BackButton
