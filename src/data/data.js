
const CHARACTER_CLASS_DATA = {
  Classes: {
    Warrior: {
      Specs: {
        Fury: {
          Main: 'Strength',
          Primary: 'Haste',
          Secondary: 'Mastery'
        },
        Arms: {
          Main: 'Strength',
          Primary: 'Critical Strike',
          Secondary: 'Mastery'
        },
        Protection: {
          Main: 'Strength',
          Primary: 'Haste',
          Secondary: 'Versatility'
        }
      }

    },
    Hunter: {
      Specs: {
        Marksman: {
          Main: 'Agility',
          Primary: 'Critical Strike',
          Secondary: 'Mastery'
        },
        'Beast Mastery': {
          Main: 'Agility',
          Primary: 'Haste',
          Secondary: 'Critical Strike'
        },
        Survival: {
          Main: 'Agility',
          Primary: 'Haste',
          Secondary: 'Versatility'
        }
      }
    },
    Priest: {
      Specs: {
        Holy: {
          Main: 'Intellect',
          Primary: 'Critical Strike',
          Secondary: 'Haste'
        },
        Discipline: {
          Main: 'Intellect',
          Primary: 'Haste',
          Secondary: 'Critical Strike'
        },
        Shadow: {
          Main: 'Intellect',
          Primary: 'Haste',
          Secondary: 'Mastery'
        }
      }
    },
    Shaman: {
      Specs: {
        Elemental: {
          Main: 'Intellect',
          Primary: 'Versatility',
          Secondary: 'Haste'
        },
        Enhancement: {
          Main: 'Agility',
          Primary: 'Haste',
          Secondary: 'Critical Strike'
        },
        Restoration: {
          Main: 'Intellect',
          Primary: 'Versatility',
          Secondary: 'Mastery'
        }
      }
    },
    Warlock: {
      Specs: {
        Demonology: {
          Main: 'Intellect',
          Primary: 'Haste',
          Secondary: 'Mastery'
        },
        Destruction: {
          Main: 'Intellect',
          Primary: 'Haste',
          Secondary: 'Mastery'
        },
        Affliction: {
          Main: 'Intellect',
          Primary: 'Mastery',
          Secondary: 'Haste'
        }
      }
    },
    Druid: {
      Specs: {
        Feral: {
          Main: 'Agility',
          Primary: 'Critical Strike',
          Secondary: 'Mastery'
        },
        Guardian: {
          Main: 'Agility',
          Primary: 'Versatility',
          Secondary: 'Mastery'
        },
        Balance: {
          Main: 'Intellect',
          Primary: 'Mastery',
          Secondary: 'Versatility'
        },
        Restoration: {
          Main: 'Intellect',
          Primary: 'Haste',
          Secondary: 'Mastery'
        }
      }
    },
    Rogue: {
      Specs: {
        Assasination: {
          Main: 'Agility',
          Primary: 'Haste',
          Secondary: 'Critical Strike'
        },
        Sublety: {
          Main: 'Agility',
          Primary: 'Versatility',
          Secondary: 'Critical Strike'
        },
        Outlaw: {
          Main: 'Agility',
          Primary: 'Versatility',
          Secondary: 'Haste'
        }
      }
    },
    Paladin: {
      Specs: {
        Protection: {
          Main: 'Strength',
          Primary: 'Haste',
          Secondary: 'Mastery'
        },
        Restibution: {
          Main: 'Strength',
          Primary: 'Haste',
          Secondary: 'Versatility'
        },
        Holy: {
          Main: 'Intellect',
          Primary: 'Haste',
          Secondary: 'Mastery'
        }
      }
    },
    'Demon Hunter': {
      Specs: {
        Vengeance: {
          Main: 'Agility',
          Primary: 'Haste',
          Secondary: 'Versatility'
        },
        Havoc: {
          Main: 'Agility',
          Primary: 'Haste',
          Secondary: 'Versatility'
        }
      }
    },
    'Death Knight': {
      Specs: {
        Blood: {
          Main: 'Strength',
          Primary: 'Versatility',
          Secondary: 'Haste'
        },
        Frost: {
          Main: 'Strength',
          Primary: 'Mastery',
          Secondary: 'Critical Strike'
        },
        Unholy: {
          Main: 'Strength',
          Primary: 'Mastery',
          Secondary: 'Haste'
        }
      }
    },
    Mage: {
      Specs: {
        Fire: {
          Main: 'Intellect',
          Primary: 'Haste',
          Secondary: 'Versatility'
        },
        Frost: {
          Main: 'Intellect',
          Primary: 'Critical Strike',
          Secondary: 'Haste'
        },
        Arcane: {
          Main: 'Intellect',
          Primary: 'Critical Strike',
          Secondary: 'Mastery'
        }
      }
    },
    Monk: {
      Specs: {
        Windwalker: {
          Main: 'Agility',
          Primary: 'Versatility',
          Secondary: 'Mastery'
        },
        Brewmaster: {
          Main: 'Agility',
          Primary: 'Versatility',
          Secondary: 'Mastery'
        },
        Mistweaver: {
          Main: 'Intellect',
          Primary: 'Critical Strike',
          Secondary: 'Versatility'
        }
      }
    }
  }
};



export default CHARACTER_CLASS_DATA;