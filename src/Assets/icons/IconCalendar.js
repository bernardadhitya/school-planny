import * as React from "react"
import Svg, { Defs, Path, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const IconAssignments = (props) => {
  const { color, focused } = props;

  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 22.656C0 23.95 1.2 25 2.679 25H22.32C23.801 25 25 23.95 25 22.656V9.375H0v13.281zm17.857-9.57c0-.322.302-.586.67-.586h2.232c.368 0 .67.264.67.586v1.953c0 .322-.302.586-.67.586h-2.232c-.369 0-.67-.264-.67-.586v-1.953zm0 6.25c0-.322.302-.586.67-.586h2.232c.368 0 .67.264.67.586v1.953c0 .322-.302.586-.67.586h-2.232c-.369 0-.67-.264-.67-.586v-1.953zm-7.143-6.25c0-.322.302-.586.67-.586h2.232c.368 0 .67.264.67.586v1.953c0 .322-.302.586-.67.586h-2.232c-.368 0-.67-.264-.67-.586v-1.953zm0 6.25c0-.322.302-.586.67-.586h2.232c.368 0 .67.264.67.586v1.953c0 .322-.302.586-.67.586h-2.232c-.368 0-.67-.264-.67-.586v-1.953zm-7.143-6.25c0-.322.302-.586.67-.586h2.232c.369 0 .67.264.67.586v1.953c0 .322-.301.586-.67.586H4.241c-.368 0-.67-.264-.67-.586v-1.953zm0 6.25c0-.322.302-.586.67-.586h2.232c.369 0 .67.264.67.586v1.953c0 .322-.301.586-.67.586H4.241c-.368 0-.67-.264-.67-.586v-1.953zm18.75-16.211h-2.678V.781c0-.43-.402-.781-.893-.781h-1.786c-.49 0-.893.352-.893.781v2.344H8.93V.781c0-.43-.402-.781-.893-.781H6.25c-.491 0-.893.352-.893.781v2.344H2.68C1.199 3.125 0 4.175 0 5.469v2.343h25V5.47c0-1.294-1.2-2.344-2.679-2.344z"
        fill={focused ? "#FFFFFF" : "#C4C4C4"}
      />
    </Svg>
  )
}

export default IconAssignments;
