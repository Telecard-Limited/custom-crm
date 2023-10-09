"use client";
import Insights from "@/components/reportsComponent/Insights";
import ReportContainer from "@/components/reportsComponent/ReportContainer";

import InsightsByCategory from "@/components/reportsComponent/insightsbyAssignTickets";

import { Button, Container, Grid, Stack } from "@mui/material";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import { useRef, useState } from "react";

import toast from "react-hot-toast";
const ReportPages = () => {
  const pdfref = useRef();
  const [generatingPdf, setGeneratingPdf] = useState(false); // To track PDF generation
  const downloadPdf = () => {
    // Check if PDF generation is already in progress
    if (generatingPdf) {
      return toast.success("pdf is downloaded");
    }

    setGeneratingPdf(true); // Set the flag to indicate PDF generation is in progress

    setTimeout(() => {
      const input = pdfref.current;
      //@ts-ignore
      html2canvas(input, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jspdf("l", "mm", "a4", true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imageWidth = canvas.width;
        const imageHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imageWidth, pdfHeight, imageHeight);
        const imageX = (pdfWidth - imageWidth * ratio) / 2;
        const imageY = 30;

        pdf.addImage(
          imgData,
          "PNG",
          imageX,
          imageY,
          imageWidth * ratio,
          imageHeight * ratio
        );

        pdf.save("adminreports.pdf");
        setGeneratingPdf(false); // Reset the flag once PDF generation is complete
      });
    }, 1000); // Delay for 1 second (1000 milliseconds)
  };
  return (
    <>
      {/* @ts-ignore */}
      <div ref={pdfref}>
        <Container
          maxWidth={"xl"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ReportContainer />
        </Container>
        <Container
          maxWidth={"xl"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <InsightsByCategory />
          <Insights />
        </Container>
      </div>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "center ",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            pt: 1.2,
            pb: 1.2,
            pl: 5,
            pr: 5,
            alignItems: "center",
            justifyContent: "center",
            width: "95%",
            backgroundColor: "#2D3748 !important",
            color: "white",
          }}
          onClick={downloadPdf}
          disabled={generatingPdf}
        >
          Generate Report
        </Button>
      </Stack>
    </>
  );
};

export default ReportPages;
