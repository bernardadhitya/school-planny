import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconEmotion2 = (props) => {
  const { focused } = props;
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.5 0C5.147 0 0 5.147 0 11.5S5.147 23 11.5 23 23 17.853 23 11.5 17.853 0 11.5 0zm3.71 7.79c.82 0 1.483.663 1.483 1.484s-.663 1.484-1.483 1.484c-.821 0-1.484-.663-1.484-1.484 0-.82.663-1.484 1.484-1.484zm-7.42 0c.821 0 1.484.663 1.484 1.484s-.663 1.484-1.484 1.484c-.82 0-1.484-.663-1.484-1.484 0-.82.664-1.484 1.484-1.484zm9.033 7.893a6.909 6.909 0 01-5.323 2.494 6.909 6.909 0 01-5.323-2.494c-.631-.756.51-1.702 1.14-.95a5.419 5.419 0 004.183 1.956 5.434 5.434 0 004.183-1.957c.621-.751 1.766.195 1.14.95z"
        fill="#598BFF"
      />
    </Svg>
  )
}

export default IconEmotion2;