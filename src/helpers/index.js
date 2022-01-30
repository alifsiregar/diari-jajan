export const numberFormatter = (e) => {
    const newFormat = new Intl.NumberFormat(
        ("id-ID", { style: "currency", currency: "IDR" })
    ).format(e);
    return newFormat;
};