import React from 'react';
import { Flex, Progress } from 'antd';
const ProgressIndicator = ({value}) => (
  <Flex gap="small" wrap>
    <Progress type="circle" percent={value} />
    {/* <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} /> */}
  </Flex>
);
export default ProgressIndicator;