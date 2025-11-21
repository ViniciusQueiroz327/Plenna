import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1f404e;
  font-family: var(--font-title);
`;

export const Subtitle = styled.p`
  color: #374151;
  border-bottom: 1px solid #cfdbe7;
  padding-bottom: 1.5rem;
  font-family: var(--font-title);

  @media (prefers-color-scheme: dark) {
    border-color: #364a5f;
  }
`;

export const Section = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-title);
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: 700;
  font-size: 0.875rem;
  color: #1f404e;
  border-bottom: 1px solid #cfdbe7;

  @media (prefers-color-scheme: dark) {
    color: #1f404e;
    border-color: #364a5f;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #cfdbe7;

  @media (prefers-color-scheme: dark) {
    border-color: #364a5f;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;

  @media (prefers-color-scheme: dark) {
    color: #1f404e;
  }
`;

interface StatusBadgeProps {
  type: "delivered" | "shipped" | "cancelled";
}

export const StatusBadge = styled.span<StatusBadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${({ type }) =>
    type === "delivered" ? "#d1fae5" :
    type === "shipped" ? "#dbeafe" :
    "#fee2e2"};
  color: ${({ type }) =>
    type === "delivered" ? "#047857" :
    type === "shipped" ? "#1e40af" :
    "#b91c1c"};

  @media (prefers-color-scheme: dark) {
    background-color: ${({ type }) =>
      type === "delivered" ? "#064e3b33" :
      type === "shipped" ? "#1e40af33" :
      "#b91c1c33"};
    color: ${({ type }) =>
      type === "delivered" ? "#a7f3d0" :
      type === "shipped" ? "#bfdbfe" :
      "#fca5a5"};
  }
`;

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #cfdbe7;
  background: transparent;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  color: #1f404e;
  font-family: var(--font-title);

  &:hover {
    background: #ffffffff;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #364a5f;
    color: #1f404e;
  }
`;
