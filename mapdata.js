var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    CLAI: {
      name: "Aisén del General Carlos Ibáñez del Campo",
      color: "#333d29",
      hover_color: "#eec170"
    },
    CLAN: {
      name: "Antofagasta",
      color: "#7f4f24",
      hover_color: "#eec170"
    },
    CLAP: {
      name: "Arica y Parinacota",
      color: "#936639",
      hover_color: "#eec170"
    },
    CLAR: {
      name: "La Araucanía",
      hover_color: "#eec170",
      color: "#a68a64"
    },
    CLAT: {
      name: "Atacama",
      hover_color: "#eec170",
      color: "#b6ad90"
    },
    CLBI: {
      name: "Bío-Bío",
      hover_color: "#eec170",
      color: "#c2c5aa"
    },
    CLCO: {
      name: "Coquimbo",
      hover_color: "#eec170",
      color: "#a4ac86"
    },
    CLLI: {
      name: "Libertador General Bernardo O'Higgins",
      hover_color: "#eec170",
      color: "#656d4a"
    },
    CLLL: {
      name: "Los Lagos",
      hover_color: "#eec170",
      color: "#414833"
    },
    CLLR: {
      name: "Los Ríos",
      hover_color: "#eec170",
      color: "#333d29"
    },
    CLMA: {
      name: "Magallanes y Antártica Chilena",
      color: "#c2c5aa",
      hover_color: "#eec170"
    },
    CLML: {
      name: "Maule",
      color: "#a4ac86",
      hover_color: "#eec170"
    },
    CLNB: {
      name: "Ñuble",
      color: "#582f0e",
      hover_color: "#eec170"
    },
    CLRM: {
      name: "Región Metropolitana de Santiago",
      color: "#7f4f24",
      hover_color: "#eec170"
    },
    CLTA: {
      name: "Tarapacá",
      color: "#a68a64",
      hover_color: "#eec170"
    },
    CLVS: {
      name: "Valparaíso",
      color: "#656d4a",
      hover_color: "#eec170"
    }
  },
  locations: {},
  labels: {
    CLAI: {
      name: "Aisén del General Carlos Ibáñez del Campo",
      parent_id: "CLAI"
    },
    CLAN: {
      name: "Antofagasta",
      parent_id: "CLAN"
    },
    CLAP: {
      name: "Arica y Parinacota",
      parent_id: "CLAP"
    },
    CLAR: {
      name: "La Araucanía",
      parent_id: "CLAR"
    },
    CLAT: {
      name: "Atacama",
      parent_id: "CLAT"
    },
    CLBI: {
      name: "Bío-Bío",
      parent_id: "CLBI"
    },
    CLCO: {
      name: "Coquimbo",
      parent_id: "CLCO"
    },
    CLLI: {
      name: "Libertador General Bernardo O'Higgins",
      parent_id: "CLLI"
    },
    CLLL: {
      name: "Los Lagos",
      parent_id: "CLLL"
    },
    CLLR: {
      name: "Los Ríos",
      parent_id: "CLLR"
    },
    CLMA: {
      name: "Magallanes y Antártica Chilena",
      parent_id: "CLMA"
    },
    CLML: {
      name: "Maule",
      parent_id: "CLML"
    },
    CLNB: {
      name: "Ñuble",
      parent_id: "CLNB"
    },
    CLRM: {
      name: "Región Metropolitana de Santiago",
      parent_id: "CLRM"
    },
    CLTA: {
      name: "Tarapacá",
      parent_id: "CLTA"
    },
    CLVS: {
      name: "Valparaíso",
      parent_id: "CLVS"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};