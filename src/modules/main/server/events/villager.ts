import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: '鸡哥', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {
        await player.showText(':)', {
            talkWith: this
        })
        player.gold += 10
    }
} 