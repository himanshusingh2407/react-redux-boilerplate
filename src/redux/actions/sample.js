export const SAMPLE_MESSAGE = 'SAMPLE_MESSAGE'

export function sampleMessage(message) {
  return {
    type: SAMPLE_MESSAGE,
    message
  }
}
