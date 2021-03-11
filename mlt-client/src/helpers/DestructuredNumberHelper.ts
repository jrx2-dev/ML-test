const useDestructuringNumber = (number: number | null): [string, string] => {
  if (number) {
    // el locale de-DE separa los miles con puntos :)
    const formatedNumber = Intl.NumberFormat("de-DE").format(number);
    const [integer, decimal = "00"] = formatedNumber.toString().split(",");
    return [integer, decimal.length > 1 ? decimal : `${decimal}0`];
  }
  return ['', ''];
};

export { useDestructuringNumber };
