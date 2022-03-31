import React from 'react'
import Svg, { Path } from "react-native-svg"

function Add(props) {
    return (
        <Svg
            height={props.size}
            width={props.size}

            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 292.377 292.377"
            style={{
                enableBackground: "new 0 0 292.377 292.377",
            }}
            xmlSpace="preserve"
        >
            <Path
                style={{
                    fill: props.color,
                }}
                d="M146.188 0C65.576 0 0 65.582 0 146.188s65.576 146.188 146.188 146.188 146.188-65.582 146.188-146.188S226.801 0 146.188 0zm48.774 152.155h-42.806v42.8c0 3.3-2.667 5.967-5.967 5.967a5.961 5.961 0 0 1-5.967-5.967v-42.8H97.415c-3.294 0-5.967-2.673-5.967-5.967s2.673-5.967 5.967-5.967h42.806V97.415a5.965 5.965 0 0 1 5.967-5.967c3.3 0 5.967 2.673 5.967 5.967v42.806h42.806c3.3 0 5.967 2.673 5.967 5.967s-2.667 5.967-5.966 5.967z"
            />
        </Svg>
    )
}
export default Add
