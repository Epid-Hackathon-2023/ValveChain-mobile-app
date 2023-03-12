export const environment = {
  production: false,
    tournee_rendement: {
      id: 1,
      nom_technicien: "John Doe",
      date_debut: "12-08-2023",
      date_fin: "15-08-2023",
      tranche: 4
    },
    annexes: {
      1: {
        niveau: 0,
        annexe_description: "Réaliser les relevés au niveau + 0.00 m",
        groupes_vannes: [
          {
            localisation_groupe: "entre les pompes CVI 001 à 004 PO et le condenseur. (M2C17)",
            vannes: [
              {
                repere_fonctionnel: "ABP 116 VL",
                description : "Réglante secours condensats ABP 302 RE",
                position_constatee: "O",
                position_attendue: "F",
                temperature_relevee: {
                  amont: 28.9,
                  aval: 33.9
                },
                temperature_attendue: 30
              },
              {
                repere_fonctionnel: "ABP 117 VL",
                description : "Réglante secours condensats ABP 301 RE",
                position_constatee: "O",
                position_attendue: "F",
                temperature_relevee: {
                  amont: 28.9,
                  aval: 33.9
                },
                temperature_attendue: 30
              },
              {
                repere_fonctionnel: "ABP 118 VL",
                description : "Soupape de sûreté condensats ABP 302 RE",
                position_constatee: "S.O",
                position_attendue: "I",
                temperature_relevee: {
                  amont: 22.1,
                  aval: 31.5
                },
                temperature_attendue: 30
              },
              {
                repere_fonctionnel: "ABP 119 VL",
                description : "Soupape de sûreté condensats ABP 301 RE",
                position_constatee: "S.O",
                position_attendue: "I",
                temperature_relevee: {
                  amont: 28.9,
                  aval: 30.1
                },
                temperature_attendue: 30
              }
            ]
          },
          {
            localisation_groupe: "refroidisseurs de purge ABP 001-002 RP. (M2 G17)"
          }
        ]
      }
    }
};


