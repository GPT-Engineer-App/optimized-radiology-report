import React, { useState } from "react";
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Checkbox, Textarea, Button, Image, useToast } from "@chakra-ui/react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";

const Index = () => {
  const [findings, setFindings] = useState({
    head: { checked: false, description: "" },
    chest: { checked: false, description: "" },
    abdomen: { checked: false, description: "" },
    pelvis: { checked: false, description: "" },
  });

  const toast = useToast();

  const handleCheckboxChange = (region) => {
    setFindings({ ...findings, [region]: { ...findings[region], checked: !findings[region].checked } });
  };

  const handleDescriptionChange = (region, value) => {
    setFindings({ ...findings, [region]: { ...findings[region], description: value } });
  };

  const handleSubmit = () => {
    // TODO: Implement data validation and submission logic
    toast({
      title: "Report Submitted",
      description: "The radiology report has been successfully submitted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="800px" margin="auto" padding="20px">
      <Heading as="h1" size="xl" textAlign="center" marginBottom="20px">
        Radiology Report Platform
      </Heading>
      <Image src="https://images.unsplash.com/photo-1666214282459-c7dff167ecc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ3klMjBzY2FufGVufDB8fHx8MTcxMDYzMDg2M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Radiology scan" marginBottom="20px" />
      <Accordion allowMultiple>
        {["Head", "Chest", "Abdomen", "Pelvis"].map((region) => (
          <AccordionItem key={region}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {region}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Checkbox isChecked={findings[region.toLowerCase()].checked} onChange={() => handleCheckboxChange(region.toLowerCase())}>
                Relevant findings
              </Checkbox>
              {findings[region.toLowerCase()].checked && <Textarea value={findings[region.toLowerCase()].description} onChange={(e) => handleDescriptionChange(region.toLowerCase(), e.target.value)} placeholder={`Enter ${region.toLowerCase()} findings`} size="sm" marginTop="10px" />}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Box textAlign="center" marginTop="20px">
        <Button leftIcon={<FaRegSave />} colorScheme="blue" onClick={handleSubmit} marginRight="10px">
          Submit Report
        </Button>
        <Button
          leftIcon={<FaRegTimesCircle />}
          onClick={() =>
            setFindings({
              head: { checked: false, description: "" },
              chest: { checked: false, description: "" },
              abdomen: { checked: false, description: "" },
              pelvis: { checked: false, description: "" },
            })
          }
        >
          Clear Form
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
