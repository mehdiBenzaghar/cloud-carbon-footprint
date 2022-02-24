/*
 * © 2021 Thoughtworks, Inc.
 */
import { OnPremiseDataOutput } from '@cloud-carbon-footprint/common'
import { createObjectCsvWriter } from 'csv-writer'

export async function writeToCsv(
  outputFileName: string,
  outputData: OnPremiseDataOutput[],
) {
  const csvWriter = createObjectCsvWriter({
    path: outputFileName,
    header: [
      { id: 'cpuId', title: 'cpuId' },
      { id: 'memory', title: 'memory' },
      { id: 'machineType', title: 'machineType' },
      { id: 'startTime', title: 'startTime' },
      { id: 'endTime', title: 'endTime' },
      { id: 'country', title: 'country' },
      { id: 'region', title: 'region' },
      { id: 'serverUtilization', title: 'serverUtilization' },
      { id: 'powerUsageEffectiveness', title: 'powerUsageEffectiveness' },
      { id: 'kilowattHours', title: 'kilowattHours' },
      { id: 'co2e', title: 'co2e' },
    ],
  })
  await csvWriter.writeRecords(outputData)
}
