import {loadLinksPreset} from 'tsparticles-preset-links'

export const particlesInilization = async (engine) =>{
    await loadLinksPreset(engine)
}