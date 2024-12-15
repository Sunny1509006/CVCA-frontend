import React from "react";
import styled from "styled-components";

// Styled components for reusability
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 1000px;
  margin: auto;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

const Subtitle = styled.p`
  color: gray;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Column = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const CategoryTitle = styled.p`
  font-size: 14px;
  margin: 10px 0 5px;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  height: 25px;
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.bgColor || "#ddd"};
  width: ${(props) => props.value}%;
`;

const ValueText = styled.span`
  position: absolute;
  left: ${(props) => (props.value < 15 ? "10px" : "95%")};
  color: white;
  font-size: 12px;
  transform: translateX(-50%);
`;

// Data for different sections
const sensitivityData = [
  { title: "School Going Children", value: 44, color: "#9171FB" },
  { title: "BMI", value: 18, color: "#05A88C" },
  { title: "Protein Consumption", value: 13, color: "#05A88C" },
  { title: "Green Consumption", value: 7, color: "#05A88C" },
  { title: "Drug Addicted Family Member", value: 6, color: "#9171FB" },
];

const exposureData = [
  { title: "Monsoon Waterlogging", value: 19, color: "#F98958" },
  { title: "Water Drainage Time", value: 8, color: "#F9C7A0" },
  { title: "Using Health Care Center", value: 7, color: "#9171FB" },
  { title: "Health Care Center Distance", value: 7, color: "#9171FB" },
  { title: "Work Absenteeism", value: 6, color: "#05A88C" },
];

const adaptiveData = [
  { title: "Lighted and Ventilated House", value: 89, color: "#9171FB" },
  { title: "Own Residence", value: 5, color: "#CFCFE8" },
  { title: "Internet Access", value: 2, color: "#05A88C" },
  { title: "Structural Vulnerability", value: 1, color: "#9171FB" },
  { title: "Waste Management", value: 6, color: "#F98958" },
];

const SectionView = ({ title, data }) => (
  <Column>
  <div >
    <h3>{title}</h3>
    {data.map((item, index) => (
      <div key={index}>
        <CategoryTitle>{item.title}</CategoryTitle>
        <ProgressBar>
          <ProgressFill value={item.value} bgColor={item.color}>
            <ValueText value={item.value}>{item.value / 100}</ValueText>
          </ProgressFill>
        </ProgressBar>
      </div>
    ))}
    </div>
  </Column>
);

function VulneralibilityDetails() {
  return (
    <Container>
      <Title>Vulnerability Details</Title>
      <Subtitle>Calculated until 30 Nov 2024</Subtitle>
      <Section>
        <SectionView title="Sensitivity" data={sensitivityData} />
        <SectionView title="Exposure" data={exposureData} />
        <SectionView title="Adaptive Capacity" data={adaptiveData} />
      </Section>
    </Container>
  );
}

export default VulneralibilityDetails;
