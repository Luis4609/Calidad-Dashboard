export default function GetData(req, res) {
  res.status(200).json(
    {
      label: "Número de agentes",
      borderRadius: 40,
      data: [0, 2, 13, 10, 1],
      backgroundColor: "rgba(32,214,155, 1)",
      barThickness: 10,
    },
  );
}
