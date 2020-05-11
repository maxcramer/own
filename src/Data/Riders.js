export const Riders ={
  riders: [
    {
      id: 1,
      name: "Chris Richardson",
      location: "Dummy Location",
      Competitions: "",
      Sponsonrs: "",
      Ig: "",
      Fb: ""
    },
    {
      id: 2,
      name: "Max Cramer",
      location: "London, UK",
      Competitions: "Non",
      Sponsonrs: "Wick Boards | HopBar UK | SkatetecUK | OWN",
      Ig: "http://instagram.com/m__row",
      Fb: ""
    },
    {
      id: 3,
      name: "Jeff McCosker",
      location: "Sacramento, CA, USA",
      Competitions: "Non",
      Sponsonrs: "The Float Life (Owner)",
      Ig: "http://instagram.com/thefloat.life",
      Fb: ""
    }
  ],
  all: function() { return this.riders },
  get: function(id) {
    const isRider = r => r.id === id
    return this.riders.find(isRider)
  }
};