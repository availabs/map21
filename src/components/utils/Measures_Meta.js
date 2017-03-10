module.exports = [
  {
    title: 'Level of Travel Time Reliability',
    info: 'The percentage of mileage of the road network that provides reliable travel.',
    key: 'system_lottr',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/systemperf20042016.pdf',
    roadTypes: ['interstate', 'noninterstate']
  },
  {
    title: 'Peak Hour Travel Time Expectations',
    info: 'The percentage of mileage of the road network that provides peak hour travel' +
      ' times within %50 of expected travel times.' +
      ' We use 50% of the speed limit as the expected threshold for this measure.',
    key: 'system_phttr',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/systemperf20042016.pdf',
    roadTypes: ['interstate', 'noninterstate']
  },
  {
    title: 'Truck Travel Time Reliability',
    info: 'The percentage of mileage of the interstate network that provides reliable travel time for freight.',
    key: 'system_tttr',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/freightmeas20042016.pdf',
    roadTypes: ['interstate']
  },
  {
    title: 'Mileage Uncongested',
    info: 'The percentage of mileage of the interstate network that provides reliable travel time for freight.',
    key: 'system_percent_milage_uncongested',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/freightmeas20042016.pdf',
    roadTypes: ['interstate']
  },
  {
    title: 'Hours of Excessive Delay',
    info: 'The Total Excessive Delay for all vehicles traveling through each' +
      ' travel time segment on the NHS within an applicable urbanized area for a full year.',
    key: 'system_total_excessive_delay',
    moreInfo: 'https://www.fhwa.dot.gov/tpm/rule/cmaq20042016.pdf',
    roadTypes: ['controlled_access', 'noncontrolled_access']
  }

]