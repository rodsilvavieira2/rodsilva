import { DownloadSimple } from "phosphor-react";
import React from "react";

import { Button, useToken } from "@chakra-ui/react";

export const CvDownloadBtn: React.FC = () => {
  const [white] = useToken("colors", ["white"]);

  return (
    <Button
      variant="outline"
      rightIcon={<DownloadSimple weight="bold" color={white} size={22} />}
    >
      Download CV
    </Button>
  );
};
