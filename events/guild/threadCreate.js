//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by Fongsi#1557 | https://discord.gg/FBfymDfrpT
 * @INFO
 * Work for Fongsi Development | https://poduls.ddns.net/
 * @INFO
 * Please mention him / Fongsi Development, when using this Code!
 * @INFO
 */
