import { Progress } from "@nextui-org/react"

const ProgressApp = ({value}) => {

  return (
    <Progress aria-label="progress"
     size="md"
     value={value}/>
  );
}

export default ProgressApp