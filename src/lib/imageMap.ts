/**
 * Image-mapping helpers — single source of truth for which generated PNG
 * is shown on each service/project page. Service and project slugs don't
 * always 1:1 match the image filenames so we map them explicitly here.
 *
 * Drop new PNGs into Website/public/assets/photos/ and edit the maps
 * below to wire them up — no component code changes needed.
 */

const PHOTOS = "/assets/photos";

const serviceImageMap: Record<string, string> = {
  "power-transmission": "service_hero_power_transmission.png",
  "building-electrification": "service_hero_building_electrification.png",
  "railway-electrification": "service_hero_railway.png",
  "cable-laying": "service_hero_cable_laying.png",
  "transformer-installation": "service_hero_transformer.png",
  "street-lighting": "service_hero_street_lighting.png",
  "lightning-protection": "service_hero_lightning_protection.png",
  "standby-generation": "service_hero_dg_ups.png",
  "renewable-energy": "service_hero_renewable.png",
  "apfc-power-quality": "service_hero_apfc.png",
};

export function getServiceImage(slug: string): string {
  const filename = serviceImageMap[slug] ?? "hero_services.png";
  return `${PHOTOS}/${filename}`;
}

const projectImageMap: Record<string, string> = {
  "world-renewal-spiritual-trust-pisoli": "project_hero_outdoor_dp.png",
  "xrbia-hinjwadi-phase-1": "project_hero_indoor_station.png",
  "xrbia-hinjwadi-phase-2": "project_hero_indoor_station.png",
  "lily-floriculture-talegaon": "project_hero_floriculture.png",
  "chhtrapati-agro-tech-bhor": "project_hero_industrial_plant.png",
  "prathamesh-krushi-prayatan-kendra-salwade": "project_hero_industrial_plant.png",
  "ajay-foods-international-ranje": "project_hero_food_processing.png",
};

export function getProjectImage(slug: string): string {
  const filename = projectImageMap[slug] ?? "project_hero_indoor_station.png";
  return `${PHOTOS}/${filename}`;
}
