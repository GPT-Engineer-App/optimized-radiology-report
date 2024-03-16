import React, { useState } from "react";
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Checkbox, Textarea, Button, Image, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaRegSave, FaRegTimesCircle, FaListUl } from "react-icons/fa";

const Index = () => {
  const [findings, setFindings] = useState({
    head: { checked: false, description: "" },
    chest: { checked: false, description: "" },
    abdomen: { checked: false, description: "" },
    pelvis: { checked: false, description: "" },
  });

  const [currentRegion, setCurrentRegion] = useState(null);
  const [modalFindings, setModalFindings] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const openModal = (region) => {
    setCurrentRegion(region);
    setModalFindings(findings[region].description);
    onOpen();
  };

  const saveModalFindings = () => {
    setFindings({ ...findings, [currentRegion]: { ...findings[currentRegion], checked: true, description: modalFindings } });
    onClose();
  };
};

export default Index;
