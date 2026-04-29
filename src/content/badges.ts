export type Badge = {
  file: string;
  label: string;
  short: string;
};

/**
 * Six trust badges. Labels confirmed from the icon set
 * (Assets/files/00_PREVIEW.html).
 */
export const badges: Badge[] = [
  { file: "badge_01_15years.svg", label: "15 Years of Experience", short: "15 Years" },
  { file: "badge_02_govt_licensed.svg", label: "Govt Electrical Licensed", short: "Govt Licensed" },
  { file: "badge_03_msedcl_msetcl.svg", label: "MSEDCL & MSETCL Approved", short: "MSEDCL & MSETCL" },
  { file: "badge_04_iso.svg", label: "ISO 9001:2015 Certified", short: "ISO 9001:2015" },
  { file: "badge_05_msme_udyam.svg", label: "MSME / Udyam Registered", short: "MSME / Udyam" },
  { file: "badge_06_gst.svg", label: "GST Registered & Compliant", short: "GST" },
];
