 const { _entrance, _geo } = $server

let entranceFlag = ProxyUtils.getFlag(_entrance.countryCode).replace(/🇹🇼/g, '🇼🇸')
let geoFlag = ProxyUtils.getFlag(_geo.countryCode).replace(/🇹🇼/g, '🇼🇸')
$server.name = (_entrance.aso !== _geo.aso || _entrance.countryCode !== _geo.countryCode) ? `${entranceFlag} ${_entrance.aso} ➮ ${geoFlag} ${_geo.aso} [${$server.type}]` : `${geoFlag} ${_geo.aso} [${$server.type}]`

delete $server._entrance
delete $server._geo