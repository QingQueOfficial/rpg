import { RpgPlayer, RpgPlayerHooks, Control, Components } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = 'YourName'
        player.setGraphic('male012')
        player.setHitbox(16, 16)
        player.setComponentsTop(Components.text('{name}'))
        player.changeMap('simplemap')
        player.setComponentsTop<any>(
            Components.hpBar({}, '{$current}/{$max}'), {
                width: 42
            }
        )
        player.setComponentsBottom(
            Components.shape({
                type: 'rect',
                width: 32,
                height: 32,
                fill: '#ff0000',
                opacity: 0.5
            }), 
            {
                marginBottom: 16
            }
        )
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        player.name = 'iKUN'
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        await player.showText('晴雀的十分牛逼的RPG游戏')
        player.setVariable('AFTER_INTRO', true)
    }
}

declare module '@rpgjs/server' {
    export interface RpgPlayer {
        wood: number
    }
}