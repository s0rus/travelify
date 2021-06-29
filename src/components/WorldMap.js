/* eslint-disable indent */
import React, { useEffect, useRef } from 'react';
import panzoom from 'panzoom';
import { useCountries } from '../contexts/countriesContext';

import '../styles/WorldMap.css';

const WorldMap = ({ handleCountryLabel, handleHideCountryLabel }) => {
  const { visitedCountries, handleCurrentCountry } = useCountries();
  const mapRef = useRef(null);

  useEffect(() => {
    panzoom(mapRef.current, {
      maxZoom: 6,
      /* bounds: true, */
      /* boundsPadding: 0.2, */
      onTouch: () => false,
    });
  }, []);

  return (
    <>
      <svg
        className="WorldMap"
        baseProfile="tiny"
        fill="#FF3B85"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.4"
        version="1.2"
        viewBox="0 0 2000 857"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g ref={mapRef}>
          <path
            d="M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z"
            id="AF"
            name="Afghanistan"
            fill={visitedCountries.includes('AF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1121.2 572 1121.8 574 1121.1 577.1 1122 580.1 1121.1 582.5 1121.5 584.7 1109.8 584.6 1109 605.1 1112.6 610.3 1116.2 614.3 1105.8 616.9 1092.3 616 1088.5 613 1065.8 613.2 1065 613.7 1061.7 610.8 1058.1 610.6 1054.7 611.7 1052 612.9 1051.5 608.9 1052.4 603.2 1054.4 597.3 1054.7 594.6 1056.6 588.8 1058 586.2 1061.3 582 1063.2 579.1 1063.8 574.4 1063.5 570.7 1061.9 568.4 1060.4 564.5 1059.1 560.7 1059.4 559.3 1061.1 556.8 1059.5 550.6 1058.3 546.3 1055.5 542.2 1056.1 541 1058.4 540.1 1060.1 540.2 1062.1 539.5 1078.8 539.6 1080.1 544.3 1081.7 548.2 1083 550.3 1085.1 553.6 1088.9 553.1 1090.7 552.2 1093.8 553.1 1094.7 551.5 1096.2 547.8 1099.7 547.5 1100 546.4 1102.9 546.4 1102.4 548.7 1109.2 548.6 1109.3 552.7 1110.4 555.1 1109.5 559 1109.9 563 1111.7 565.4 1111.3 573 1112.7 572.4 1115.1 572.6 1118.6 571.6 1121.2 572 Z"
            id="AO"
            name="Angola"
            fill={visitedCountries.includes('AO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1055.3 539 1053.8 534.2 1056.1 531.4 1057.8 530.3 1059.9 532.5 1057.9 533.9 1056.9 535.5 1056.7 538.3 1055.3 539 Z"
            id="AO"
            name="Angola"
            fill={visitedCountries.includes('AO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1088 228l0.4 1.2 1.4-0.6 1.2 1.7 1.3 0.7 0.6 2.3-0.5 2.2 1 2.7 2.3 1.5 0.1 1.7-1.7 0.9-0.1 2.1-2.2 3.1-0.9-0.4-0.2-1.4-3.1-2.2-0.7-3 0.1-4.4 0.5-1.9-0.9-1-0.5-2.1 1.9-3.1z"
            id="AL"
            name="Albania"
            fill={visitedCountries.includes('AL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1296.2 336.7l1.3 5.1-2.8 0 0 4.2 1.1 0.9-2.4 1.3 0.2 2.6-1.3 2.6 0 2.6-1 1.4-16.9-3.2-2.7-6.6-0.3-1.4 0.9-0.4 0.4 1.8 4.2-1 4.6 0.2 3.4 0.2 3.3-4.4 3.7-4.1 3-4 1.3 2.2z"
            id="AE"
            name="United Arab Emirates"
            fill={visitedCountries.includes('AE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 669.1 851.7 666.1 851.5 661.1 851.5 655.1 837.9 658.2 840.7 662.5 845.3 670.3 849 677.6 850.5 676.8 853.5 672.4 853.8 669.1 851.7 Z"
            id="AR"
            name="Argentina"
            fill={visitedCountries.includes('AR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 638.6 644.7 649.9 655.1 654.5 656.1 661.8 660.9 667.7 663.4 668.8 666.2 664.6 676 670.4 677.7 676.7 678.7 680.9 677.7 685.2 672.7 685.5 667.1 688.1 665.8 691.3 669.6 691.7 674.7 687.5 678.2 684.2 680.8 678.9 687.1 672.9 695.8 672.4 701 672 707.6 673.2 714 672.3 715.4 672.7 719.5 673 722.9 680.8 728.4 681 732.8 684.9 735.6 685.2 738.7 681.9 746.9 674.9 750.4 664.7 751.7 658.7 751 660.8 754.9 660.9 759.6 662.7 762.8 660.2 765.1 655.1 766 649.5 763.6 648 765.3 650.5 771.6 654.5 773.5 656.8 771.5 659.3 774.8 655.1 776.8 652.2 780.8 653.4 787.1 653.3 790.5 648.5 790.5 645.5 793.7 645.6 798.5 652.1 803.1 657.3 804.3 657.5 810 652.9 813.5 652.3 820.8 648.8 823.2 647.9 826.1 652.1 832.6 656.7 836.1 654.6 835.8 649.7 834.8 637.6 834 634.1 830.4 632.2 825.8 629.1 826.2 626.5 823.9 623.4 817.4 626.1 814.6 626.2 810.7 624.4 807.5 625.1 802.1 624 793.8 622.2 790.1 624 788.9 622.6 786.5 619.8 785.3 620.6 782.6 617.5 780.2 613.8 772.9 615.5 771.6 612.2 763.8 611.4 757.3 611.2 751.6 613.7 749.3 610.4 743 608.8 737.2 611.8 733 610.4 727.6 612 721.4 610.6 715.5 609 714.3 604.1 703.2 606.2 696.6 604.5 690.4 605.4 684.5 608 678.5 611.3 674.5 609.3 672 610.1 669.9 608.5 659.2 614.1 656.1 615.3 649.4 614.4 647.8 618.4 642 625.9 643.6 629.6 648.2 631.2 643 637.6 643.3 638.6 644.7 Z"
            id="AR"
            name="Argentina"
            fill={visitedCountries.includes('AR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1230.8 253l-1.8 0.2-2.8-3.7-0.2-1-2.3 0-1.9-1.7-1 0.1-2.4-1.8-4.2-1.6-0.1-3.1-1.3-2.2 7-1 1.4 1.6 2.2 1.1-0.7 1.6 3.2 2.2-1.1 2.1 2.6 1.7 2.5 1 0.9 4.5z"
            id="AM"
            name="Armenia"
            fill={visitedCountries.includes('AM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1743 763.6 1746.7 765.8 1750 764.9 1754.9 763.7 1757.7 764.1 1753.2 771.7 1749.9 773.8 1745.9 779 1745.3 777.2 1738.7 781.6 1737.9 781.3 1734.9 781.1 1735.4 775.7 1737.4 771.5 1738 765.9 1740 763 1743 763.6 Z"
            id="AU"
            name="Australia"
            fill={visitedCountries.includes('AU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1793.5 590.2 1794.7 595.2 1798.7 592.8 1800.1 595.5 1802.4 598 1801.3 600.9 1801.5 606.4 1801.7 609.6 1803 610.4 1803.4 615.9 1802.2 619.2 1803 623.5 1808.4 626.9 1811.6 629.9 1814.8 632.7 1813.7 634.3 1816 638.3 1816.5 645.3 1819.1 643.9 1820.6 646.6 1822.2 645.7 1821.5 652.5 1824.4 656.4 1826.3 658.8 1829.1 664 1829.1 669.2 1828.1 672.9 1826.3 676.8 1827 682.3 1824.5 688 1822.4 691 1818.6 696.7 1817.1 700.4 1814 705 1809 710.8 1803.5 714 1799.1 718.9 1795.8 722.1 1791.4 727.6 1787.7 730.8 1783.8 735.6 1780.7 740 1779.9 742.1 1775.6 744.3 1769.5 744.5 1763.2 747.2 1759.4 749.6 1754.6 752.4 1751.9 749.5 1749.3 748.4 1751.9 745.1 1748.4 746.3 1741.2 750.9 1737.6 749.2 1735.2 748.2 1732.4 747.7 1728.3 745.9 1727 741.9 1728.5 737.1 1728.9 733.8 1727.5 731.2 1722.8 730.5 1726 727.3 1726.9 722.6 1722.2 727 1716.9 728.2 1721.4 724.7 1723.9 721 1727.4 717.8 1729 713.1 1722.2 718.5 1717.9 720.7 1713.6 725.8 1710.6 723.2 1712.3 719.8 1710.9 715.1 1709.1 712.7 1710.7 711.2 1705.4 707.3 1701.6 707.2 1697.6 704 1687.7 704.6 1679.8 706.9 1672.9 709.1 1667.9 708.7 1660.9 712 1655.6 713.4 1653.3 716.8 1650.3 719.4 1645.6 719.6 1642 720.1 1637.8 719 1633.6 719.7 1629.8 720 1625.3 723.4 1623.8 723.1 1620.4 724.9 1617 726.9 1613.2 726.7 1609.7 726.7 1605.6 722.6 1603.2 721.4 1604.7 717.7 1607.6 716.8 1609.1 715.4 1609.7 713.1 1612 708.6 1612.7 704.8 1612 698.3 1612.2 694.6 1613.6 691 1612.7 686.8 1613 684.9 1611.3 682.3 1612 677.3 1610.1 672.2 1610 669.5 1611.8 672.3 1611.3 666.3 1613.6 668.2 1614.7 670.7 1615.3 667.4 1613.7 662.3 1613.6 660.3 1612.8 658.4 1614.1 654.7 1615.6 653.1 1616.9 649.9 1617 646.1 1620.1 641.5 1619.7 646.4 1622.8 642 1627.7 639.8 1630.9 637.1 1635.6 634.7 1638.2 634.2 1639.6 635 1644.4 632.6 1647.9 631.9 1649 630.5 1650.5 629.9 1653.6 630.1 1659.8 628.2 1663.3 625.3 1665.3 621.9 1669.2 618.7 1669.9 616.1 1670.6 612.6 1675.5 607.1 1676.9 612.7 1679.5 611.4 1678 608.4 1680.3 605.3 1682.5 606.7 1684 601.8 1687.5 598.6 1689.3 596.1 1692.2 595 1692.6 593.2 1694.9 593.9 1695.3 592.3 1697.9 591.4 1700.7 590.5 1704.4 593.5 1707 597.3 1710.5 597.3 1714 597.9 1713.3 594.4 1716.8 589.3 1719.5 587.6 1718.9 586 1721.8 582.3 1725.5 580 1728.2 580.8 1733.1 579.6 1733.4 576.3 1729.5 574.2 1732.6 573.3 1736.2 574.9 1738.9 577.5 1743.4 579.1 1745.1 578.5 1748.4 580.5 1751.9 578.6 1753.9 579.2 1755.4 577.9 1757.6 581.1 1755.6 584.6 1753.1 587.2 1751.2 587.4 1751.5 589.9 1749.3 593.1 1746.8 596.3 1747 598.1 1750.8 601.7 1754.8 603.7 1757.3 605.9 1760.6 609.7 1762.2 609.7 1764.8 611.4 1765.3 613.4 1770.2 615.5 1774.3 613.3 1776.1 609.9 1777.8 607 1779.1 603.5 1781.7 598.4 1781.5 595.3 1782.2 593.4 1782.1 589.8 1783.5 584.9 1784.8 583.6 1784.2 581.5 1786 578.1 1787.5 574.6 1787.9 572.7 1790.2 570.3 1791.5 573.5 1791.4 577.5 1792.7 578.3 1792.6 581 1794.2 584.2 1794.1 587.9 1793.5 590.2 Z"
            id="AU"
            name="Australia"
            fill={visitedCountries.includes('AU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1070.6 190.8l-0.3 0.8 0.7 2.1-0.2 2.6-2.8 0 1.1 1.4-1.3 4-0.9 1.1-4.4 0.1-2.4 1.5-4.2-0.5-7.3-1.7-1.3-2.1-4.9 1.1-0.5 1.2-3.1-0.9-2.6-0.2-2.3-1.2 0.7-1.5-0.2-1.1 1.4-0.3 2.7 1.7 0.6-1.7 4.4 0.3 3.5-1.1 2.4 0.2 1.7 1.3 0.4-1.1-1-4.1 1.7-0.8 1.6-2.9 3.8 2.1 2.6-2.6 1.7-0.5 4 1.9 2.3-0.3 2.4 1.2z"
            id="AT"
            name="Austria"
            fill={visitedCountries.includes('AT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1229 253.2 1225.2 252.3 1222 249.4 1220.8 246.9 1221.8 246.8 1223.7 248.5 1226 248.5 1226.2 249.5 1229 253.2 Z"
            id="AZ"
            name="Azerbaijan"
            fill={visitedCountries.includes('AZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1235.3 236.2 1237.8 233.6 1241.3 236.9 1244.9 241.5 1247.4 241.8 1249.3 243.5 1245.1 244 1245.2 249 1244.8 251.2 1243.1 252.7 1243.9 255.8 1242.6 256.2 1238.7 252.8 1239.9 249.7 1238 247.8 1236.1 248.3 1230.8 253 1229.9 248.5 1227.4 247.5 1224.8 245.8 1225.9 243.7 1222.7 241.5 1223.4 239.9 1221.2 238.8 1219.8 237.2 1220.9 236.1 1225.1 238 1228 238.3 1228.6 237.6 1225.3 234.1 1226.5 233.3 1228 233.5 1232.3 237.3 1234.7 237.8 1235.3 236.2 Z"
            id="AZ"
            name="Azerbaijan"
            fill={visitedCountries.includes('AZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1154.9 530.4l-0.6 0.1 0-0.3-2-6.1-0.01-0.06-0.09-1.04-1.4-2.9 3.5 0.5 1.7-3.7 3.1 0.4 0.3 2.5 1.2 1.5 0 2.1-1.4 1.3-2.3 3.4-2 2.3z"
            id="BI"
            name="Burundi"
            fill={visitedCountries.includes('BI') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z"
            id="BE"
            name="Belgium"
            fill={visitedCountries.includes('BE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1006.7 427l-0.2 2.1 1.3 3.8-1.1 2.6 0.6 1.7-2.8 4-1.7 2-1.1 4 0.2 4.1-0.3 10.3-4.7 0.8-1.4-4.4 0.3-14.8-1.2-1.3-0.2-3.2-2-2.2-1.7-1.9 0.7-3.4 2-0.7 1.1-2.8 2.8-0.6 1.2-1.9 1.9-1.9 2 0 4.3 3.7z"
            id="BJ"
            name="Benin"
            fill={visitedCountries.includes('BJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M988.5 406l-0.5 3.1 0.8 2.9 3.1 4.2 0.2 3.1 6.5 1.5-0.1 4.4-1.2 1.9-2.8 0.6-1.1 2.8-2 0.7-4.9-0.1-2.6-0.5-1.8 1-2.5-0.5-9.8 0.3-0.2 3.7 0.8 4.8-3.9-1.6-2.6 0.2-2 1.6-2.5-1.3-1-2.2-2.5-1.4-0.4-3.7 1.6-2.7-0.2-2.2 4.5-5.3 0.9-4.4 1.5-1.6 2.7 0.9 2.4-1.3 0.8-1.7 4.3-2.8 1.1-2 5.3-2.7 3.1-0.9 1.4 1.2 3.6 0z"
            id="BF"
            name="Burkina Faso"
            fill={visitedCountries.includes('BF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1500.6 360.3l0.6 4.6-2.1-1 1.1 5.2-2.1-3.3-0.8-3.3-1.5-3.1-2.8-3.7-5.2-0.3 0.9 2.7-1.2 3.5-2.6-1.3-0.6 1.2-1.7-0.7-2.2-0.6-1.6-5.3-2.6-4.8 0.3-3.9-3.7-1.7 0.9-2.3 3-2.4-4.6-3.4 1.2-4.4 4.9 2.8 2.7 0.3 1.2 4.5 5.4 0.9 5.1-0.1 3.4 1.1-1.6 5.4-2.4 0.4-1.2 3.6 3.6 3.4 0.3-4.2 1.5 0 4.4 10.2z"
            id="BD"
            name="Bangladesh"
            fill={visitedCountries.includes('BD') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1132.6 221.6l-2.3 2.6-1.3 4.5 2.1 3.6-4.6-0.8-5 2 0.3 3.2-4.6 0.6-3.9-2.3-4 1.8-3.8-0.2-0.8-4.2-2.8-2.1 0.7-0.8-0.6-0.8 0.6-2 1.8-2-2.8-2.7-0.7-2.4 1.1-1.4 1.8 2.6 1.9-0.4 4 0.9 7.6 0.4 2.3-1.6 5.9-1.5 4 2.3 3.1 0.7z"
            id="BG"
            name="Bulgaria"
            fill={visitedCountries.includes('BG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1083 214.3l1.9-0.1-1.1 2.8 2.7 2.5-0.5 2.9-1.1 0.3-0.9 0.6-1.6 1.5-0.4 3.5-4.8-2.4-2.1-2.7-2.1-1.4-2.5-2.4-1.3-1.9-2.7-3 0.8-2.6 2 1.5 1-1.4 2.3-0.1 4.5 1.1 3.5-0.1 2.4 1.4z"
            id="BA"
            name="Bosnia and Herzegovina"
            fill={visitedCountries.includes('BA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1141.6 162.7l-3.9-0.2-0.8 0.6 1.5 2 2 4-4.1 0.3-1.3 1.4 0.3 3.1-2.1-0.6-4.3 0.3-1.5-1.5-1.7 1.1-1.9-0.9-3.9-0.1-5.7-1.5-4.9-0.5-3.8 0.2-2.4 1.6-2.3 0.3-0.5-2.8-1.9-2.8 2.8-1.3-0.4-2.4-1.7-2.3-0.6-2.7 4.7 0 4.8-2.3 0.5-3.4 3.6-2-1-2.7 2.7-1 4.6-2.3 5.3 1.5 0.9 1.5 2.4-0.7 4.8 1.4 1.1 2.9-0.7 1.6 3.8 4 2.1 1.1 0 1.1 3.4 1.1 1.7 1.6-1.6 1.3z"
            id="BY"
            name="Belarus"
            fill={visitedCountries.includes('BY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M487.8 399.8l-1.7 0 1.3-7.2 0.7-5.1 0.1-1 0.7-0.3 0.9 0.8 2.5-3.9 1.1-0.1-0.1 1 1 0-0.3 1.8-1.3 2.7 0.4 1-0.9 2.3 0.3 0.6-1 3.3-1.3 1.7-1.1 0.2-1.3 2.2z"
            id="BZ"
            name="Belize"
            fill={visitedCountries.includes('BZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M662.5 631.4l-0.3-2-5.4-3.3-5.2-0.1-9.6 1.9-2.1 5.6 0.2 3.5-1.5 7.7-1-1.4-6.4-0.3-1.6 5.2-3.7-4.6-7.5-1.6-4 5.8-3.9 0.9-3.1-8.9-3.7-7.2 1.1-6.2-3.2-2.7-1.2-4.6-3.2-4.4 2.9-6.9-2.9-5.4 1.1-2.2-1.2-2.4 1.9-3.2-0.3-5.4 0-4.6 1.1-2.1-5.5-10.4 4.2 0.6 2.9-0.2 1.1-1.9 4.8-2.6 2.9-2.4 7.3-1.1-0.4 4.8 0.9 2.5-0.3 4.3 6.5 5.7 6.4 1.1 2.3 2.4 3.9 1.3 2.5 1.8 3.5 0 3.4 1.9 0.5 3.7 1.2 1.9 0.3 2.7-1.7 0.1 2.8 7.5 10.7 0.3-0.5 3.7 0.8 2.5 3.2 1.8 1.7 4-0.6 5.1-1.3 2.8 0.8 3.6-1.6 1.4z"
            id="BO"
            name="Bolivia"
            fill={visitedCountries.includes('BO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M665.8 489.6l3.1 0.6 0.6-1.4-1-1.2 0.6-1.9 2.3 0.6 2.7-0.7 3.2 1.4 2.5 1.3 1.7-1.7 1.3 0.2 0.8 1.8 2.7-0.4 2.2-2.5 1.8-4.7 3.4-5.9 2-0.3 1.3 3.6 3 11.2 3.1 1.1 0.1 4.4-4.3 5.3 1.7 1.9 10.1 1 0.2 6.5 4.3-4.2 7.1 2.3 9.5 3.9 2.8 3.7-0.9 3.6 6.6-2 11 3.4 8.5-0.2 8.4 5.3 7.4 7.2 4.4 1.8 4.8 0.3 2.1 2 2 8.2 1.1 3.9-2.1 10.6-2.7 4.2-7.7 8.9-3.4 7.3-4 5.5-1.4 0.2-1.3 4.7 0.9 12-1.1 9.9-0.3 4.2-1.6 2.6-0.5 8.6-5.2 8.3-0.5 6.7-4.3 2.7-1.1 3.9-6 0-8.5 2.4-3.7 2.9-6 1.9-6.1 5.1-4.1 6.4-0.3 4.8 1.3 3.5-0.3 6.5-0.8 3.1-3.4 3.6-4.5 11.3-4 5-3.2 3.1-1.5 6.1-2.9 3.6-2.1-3.6 1.8-3.1-3.8-4.3-4.8-3.6-6.3-4.1-1.9 0.2-6.3-5-3.4 0.7 6-8.7 5.3-6.3 3.3-2.6 4.2-3.5-0.4-5.1-3.2-3.8-2.6 1.3 0.7-3.7 0.3-3.8-0.3-3.6-2.1-1.1-2 1-2.1-0.3-0.8-2.4-1.1-5.9-1.2-1.9-3.9-1.8-2.2 1.3-5.9-1.3-0.4-8.7-2-3.5 1.6-1.4-0.8-3.6 1.3-2.8 0.6-5.1-1.7-4-3.2-1.8-0.8-2.5 0.5-3.7-10.7-0.3-2.8-7.5 1.7-0.1-0.3-2.7-1.2-1.9-0.5-3.7-3.4-1.9-3.5 0-2.5-1.8-3.9-1.3-2.3-2.4-6.4-1.1-6.5-5.7 0.3-4.3-0.9-2.5 0.4-4.8-7.3 1.1-2.9 2.4-4.8 2.6-1.1 1.9-2.9 0.2-4.2-0.6-3.2 1.1-2.6-0.7-0.1-9.7-4.4 3.7-5-0.1-2.3-3.5-3.8-0.3 1-2.8-3.3-3.9-2.6-5.8 1.5-1.1-0.2-2.8 3.4-1.8-0.7-3.5 1.4-2.2 0.3-3 6.3-4.4 4.6-1.2 0.8-1 5.1 0.3 2.2-17.6 0.1-2.8-0.9-3.6-2.6-2.4 0.1-4.7 3.2-1 1.1 0.7 0.2-2.5-3.3-0.7 0-4 11 0.2 1.9-2.3 1.6 2.1 1 3.8 1.1-0.8 3.1 3.4 4.4-0.4 1.1-2 4.2-1.5 2.4-1.1 0.7-2.7 4.1-1.8-0.3-1.4-4.8-0.5-0.7-4.1 0.3-4.3-2.5-1.6 1.1-0.6 4.1 0.8 4.5 1.6 1.7-1.5 4.1-1 6.4-2.4 2.1-2.5-0.7-1.8 3-0.2 1.2 1.4-0.8 2.9 2 0.9 1.2 3-1.6 2.3-1 5.4 1.4 3.3 0.3 3 3.5 3 2.8 0.3 0.6-1.3 1.8-0.3 2.6-1.1 1.8-1.7 3.2 0.6 1.3-0.3z"
            id="BR"
            name="Brazil"
            fill={visitedCountries.includes('BR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1633.1 472.8l2.2-2.4 4.6-3.6-0.1 3.2-0.1 4.1-2.7-0.2-1.1 2.2-2.8-3.3z"
            id="BN"
            name="Brunei Darussalam"
            fill={visitedCountries.includes('BN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z"
            id="BT"
            name="Bhutan"
            fill={visitedCountries.includes('BT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1127.6 615.7l1.9 5.1 1.1 1.2 1.6 3.7 6.1 7 2.3 0.7-0.1 2.3 1.5 4.1 4.3 1 3.4 2.9-8.1 4.7-5.2 4.8-2 4.3-1.8 2.4-3 0.5-1.2 3.1-0.6 2-3.6 1.4-4.5-0.3-2.5-1.8-2.3-0.7-2.8 1.4-1.5 3.1-2.7 1.9-2.8 2.9-4 0.7-1.1-2.3 0.6-3.9-3-6.1-1.4-1 0.6-18.7 5.5-0.2 0.8-22.9 4.2-0.2 8.7-2.3 2 2.7 3.7-2.5 1.7 0 3.2-1.5 1 0.5z"
            id="BW"
            name="Botswana"
            fill={visitedCountries.includes('BW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1121.3 446.5l3.9 2.5 3.1 2.6 0.1 2.1 3.9 3.3 2.4 2.8 1.4 3.8 4.3 2.6 0.9 2-1.8 0.7-3.7-0.1-4.2-0.7-2.1 0.5-0.9 1.6-1.8 0.2-2.2-1.4-6.3 3.2-2.6-0.6-0.8 0.5-1.6 3.9-4.3-1.3-4.1-0.6-3.6-2.4-4.7-2.2-3 2.1-2.2 3.2-0.5 4.5-3.6-0.3-3.9-1.1-3.3 3.4-3 6-0.6-1.9-0.3-2.9-2.6-2.1-2.1-3.3-0.5-2.3-2.7-3.4 0.5-1.9-0.6-2.7 0.4-5 1.4-1.1 2.8-6.5 4.6-0.5 1-1.7 1 0.2 1.4 1.4 7.1-2.4 2.4-2.5 2.9-2.3-0.6-2.2 1.6-0.6 5.5 0.4 5.2-3 4-7 2.8-2.6 3.6-1.1 0.7 2.7 3.3 4 0 2.7-0.8 2.6 0.4 2 1.9 1.9 0.5 0.3z"
            id="CF"
            name="Central African Republic"
            fill={visitedCountries.includes('CF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 665.9 203.6 669.3 204.5 674 204.3 670.7 206.9 668.7 207.3 663.2 204.6 662.6 202.5 665.1 200.6 665.9 203.6 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 680.3 187.6 677.9 187.7 672.1 185.8 668.6 182.8 670.5 182.3 676.4 183.9 680.6 186.5 680.3 187.6 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 372.4 191.3 369.3 192.2 363 189.4 363 187.2 360.1 185 360.4 183.2 356.1 182.1 356.7 178.7 358.2 177.3 362.3 178.6 364.7 179.6 368.8 180.2 369 182.4 369.4 185.3 372.6 187.9 372.4 191.3 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 711.5 177.8 706.5 183.2 710.4 181.1 713.3 182.5 710.9 184.6 714.7 186.3 717.5 184.8 721.8 186.7 719 191.3 722.8 190.2 722.5 193.5 723 197.4 719.4 203 717 203.2 714.1 202 716.6 196.9 715.4 196.1 708.1 201.5 705.1 201.3 709.5 198.3 705.1 196.8 699.6 197.2 690 197 689.8 195.2 693.6 192.9 691.9 191.3 697.3 187.5 705.5 177.6 709.7 174.1 714.7 172 716.8 172.2 715.3 173.9 711.5 177.8 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 351.5 156.4 353 157.2 358 156.7 350.8 163.6 351.1 168.6 349.2 168.6 348.5 165.8 349 162.9 348.2 161 349.5 158.3 351.5 156.4 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 634.9 108.9 631.3 111.9 629.6 111.4 629.5 109.7 629.9 109.3 632.7 107.6 634.4 107.7 634.9 108.9 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 625.2 105.7 618 108.9 615 108.7 615 107.2 620 104.5 626 104.6 625.2 105.7 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 622.1 88.9 621.2 91.4 623.9 90.5 625.4 92 628.9 94 632.7 95.7 631.3 98.4 634.8 98 636.7 99.9 631.7 101.7 625.8 100.3 625 97.7 618.7 100.8 610.5 103.7 611.2 100.4 604.9 100.9 610.6 98.1 614.2 93.6 619.3 88.5 622.1 88.9 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 667 80.6 662.1 80.9 662.8 78.2 666.6 75.1 670.9 74.4 673.2 75.9 671.7 78.2 670.8 79 667 80.6 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 592.5 69.9 588.4 71.8 584.2 70.2 580.3 70.7 576.9 68.3 581.9 66.6 586.8 64.3 589.8 65.8 591.4 66.8 591.8 67.8 592.5 69.9 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 645.5 212.5 643.3 208.9 646.2 200.4 644.6 198.6 640.9 199.6 639.8 198 634.3 202.7 631.1 207.6 628.3 210.5 625.8 211.5 624.1 211.8 623 213.3 613.7 213.3 605.9 213.4 603.2 214.5 596.4 218.9 596.4 218.8 595.5 218.4 593.5 219.3 591.6 220.6 589.8 219.5 585.1 220.3 581.2 221.2 579.3 222 577 224.1 578.8 224.8 580.5 224.4 580.8 224.4 580.5 226.3 575.7 227 572.9 227.8 571.2 228.8 568.6 228.2 567 228.5 564.1 230.3 559.5 232.3 556.8 231.9 558.8 229.7 562.5 226.2 566.6 224.1 567.7 222.3 568.6 219.3 572.4 215.8 573.3 211.8 574.4 215.7 578.2 216.6 580.6 214.5 579.2 209.7 578.3 207.7 574.3 206.5 570.5 205.8 566.6 205.8 563.2 205 562.8 203.6 561.4 204.5 560.2 204.3 562.1 202.2 560.3 201.4 562.2 199 561 197.2 562.7 195.4 557.5 194.5 557.4 190.9 556.6 190.1 553.3 189.9 549.2 188.7 547.7 189.5 545.9 191 542.6 192 539.5 194.5 534.1 192.8 529.7 193.6 525.8 191.7 521.2 190.7 517.9 190.3 516.9 189.3 517.8 185.9 516.1 185.9 514.8 188.3 504.6 188.3 487.6 188.3 470.8 188.3 455.9 188.3 441.1 188.3 426.4 188.3 411.3 188.3 406.5 188.3 391.8 188.3 377.7 188.3 377 188.3 371.6 182.2 370 179.5 363 176.9 364.3 171.4 367.9 167.7 363.8 165 366.9 160.1 364.8 155.7 367.3 152.5 372.4 149.6 375.6 145.8 371 142 372.4 135.1 373.5 130.9 371.9 128.2 371.1 125.8 371.7 122.7 365.2 124.6 357.6 127.9 357.3 124.1 356.8 121.5 354 119.9 349.8 119.7 385.4 87 410 66.6 416 67.9 419.3 70.5 423 71 429.3 68.8 436.3 67.1 441.6 67.7 450.5 65.4 458.7 64.1 458.9 66.3 463.4 65 467.3 62.5 469.4 63.1 470.8 67.9 480.3 64.2 476.4 68.3 482.4 67.4 485.6 65.9 490.2 66.2 494.1 68.4 501.6 70.4 506.3 71.3 510.7 71 513.6 73.8 505.1 76.5 511.5 77.6 523.4 77 527.8 76 529.2 79.3 536.3 76.6 534.2 74.2 538.7 72.4 543.9 72.1 547.8 71.6 549.9 72.9 551.4 75.8 556.4 75.4 561.7 77.9 568.9 77 574.9 77.1 577.3 73.7 581.8 72.8 586.7 74.6 582.4 79.8 588.6 75.4 591.8 75.6 598.2 70.1 596.6 66.8 593.7 64.6 599.2 58.7 607.4 54.9 611.9 55.8 613.9 58.1 614.3 64.1 608.5 66.7 615.2 67.8 610.8 73.3 619.7 69.1 621.9 72.6 617.6 76.6 618.9 80.3 626.2 76.4 632.7 71.6 637.4 65.7 642.9 66.1 648.3 66.9 651.9 69.6 650.2 72.3 645.1 75.2 646 78.1 643.6 80.8 632.7 84.7 626.2 85.6 623 83.9 619.7 86.7 612.3 91.4 609.3 93.9 601.6 97.7 595.1 98.1 590 100.5 587.1 104.3 581.4 105 572.7 109.7 563.3 116.2 558.3 120.8 553.4 127.7 559.4 128.7 557.9 134.2 557.1 138.8 564.4 137.6 571.4 140.2 574.7 142.5 576.4 145.3 581.3 147 584.9 149.5 592.5 149.9 597.3 150.5 593.7 155.7 592 161.8 592.1 168.7 596.5 174.6 601.2 172.6 606.8 166.2 609.1 156.6 607.4 153.4 616.4 150.5 623.9 146.3 628.7 142.1 630.4 138.1 630 133 626.8 128.5 635.7 122.3 636.7 117 640.6 108 644.4 106.6 651.1 108.2 655.3 108.8 659.8 107.2 662.9 109.2 666.5 112.6 666.7 114.8 674.4 115.3 671.8 120.2 669.5 127.6 673.3 128.6 674.9 132.1 683.1 128.8 690.6 122.2 694.8 119.5 695.9 124.8 698.5 132.3 700.5 139.5 697.1 143.3 701.9 146.7 704.8 150.1 711.7 151.7 714.1 153.6 714.1 158.8 717.5 159.6 718.6 161.9 716.6 168.8 712.3 171.1 708.1 173.3 699.3 175.5 691.4 180.5 682.8 181.6 672.7 180.2 665.4 180.2 660.1 180.6 654.4 185.1 647 187.9 636.9 196.1 629 201.9 633.7 200.9 644.6 192.6 656.9 187.4 664.5 186.8 667.8 189.9 661.7 194.1 661.1 200.8 661.2 205.6 666.8 208.7 675.4 207.8 682.6 200.7 681.6 205.3 684.1 207.6 676.7 211.7 664.3 215.5 658.5 218 651.3 222.6 647.6 222.1 649.1 216.8 659.5 211.5 651.4 211.7 645.5 212.5 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 539 48.7 534.3 51.1 544.8 49.6 547.4 52.2 554.7 49.5 556.5 51.2 554.3 56.3 558.6 54.2 561.4 48.9 565.7 48.1 568.7 48.9 570.9 51 568.2 56.1 565.8 59.8 570 62.4 575 65 572.4 67.3 565.3 67.8 566.1 69.8 562.9 71.8 556.2 71 550.5 69.5 545.4 69.8 535.9 71.7 524.6 72.5 516.7 73 517 70.4 512.9 69 508.6 69.6 508 65.3 511.3 64.7 518.6 63.8 524.1 64.1 530.3 63.1 523.8 61.9 514.7 62.3 509 62.2 509 60.3 520.7 58.1 514.4 58.2 509 56.8 516.8 52.9 522 50.8 536.2 47.7 539 48.7 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 578.5 47.2 571.5 50.6 569.2 47 571.3 46.2 576.8 46 578.5 47.2 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 687.1 48.8 686.4 50.2 682.3 50.1 678.2 50 673.3 50.7 672.4 50.3 670.3 47.6 672 45.8 674.2 45.4 682.6 46 687.1 48.8 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 647.3 48.5 647.6 51.7 654.8 47.6 666.5 45.5 668.8 50.8 665.6 54.2 674.6 52.7 679.9 50.6 686.7 53.2 690.4 55.7 689.3 58 697.5 56.8 699.4 60.2 707.8 62.3 710 64.4 710.9 69.5 701.8 72 709.5 75.6 715.4 76.8 718.7 81.8 725.2 82.2 721.9 86.1 711 92.6 707 90.2 703.2 84.8 697.3 85.5 695 88.8 697.7 92 702.2 94.6 703.2 96.1 703.1 101.8 699.5 105.9 694.8 104.3 686.2 99.8 689.8 104.7 692.6 108.2 692.3 110.2 681.4 107.9 673.8 104.5 670 101.8 672.4 100.1 667.6 97.2 662.9 94.5 662 96.1 648.9 97 646.5 95.1 651.9 90.9 660 90.8 669.3 90.1 669.1 88.1 672.2 85.3 681 79.9 681.4 77.4 680.9 75.6 676.2 72.9 669.1 71.1 672.6 69.7 670.6 66.3 667.2 66 665.3 64.2 662 65.8 654.1 66.5 640.1 65.3 632.7 63.7 626.8 62.9 624.9 61 631.2 58.6 625.5 58.6 628.8 53.3 635.9 48.7 641.9 46.6 653.1 45.2 647.3 48.5 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 596.9 45 600.5 46.1 608.1 45.4 607.6 46.9 601.5 49.4 605.3 51.6 600.1 56.3 591.7 58.3 588.3 57.9 587.4 55.9 581.5 51.9 583.2 50.2 590.6 50.8 589.7 47.5 596.9 45 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 619.5 50.5 611.7 54.4 607.3 54.2 609.1 49.6 611.7 47.1 615.9 44.9 621.1 43.5 629 43.7 635.2 44.9 625.1 49.5 619.5 50.5 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 503.7 57.7 490.2 60.3 490.8 58 484.8 55.2 489.2 53 496.7 49.2 504.3 45.8 504.7 42.7 518.7 41.9 522.9 43 532.4 43.3 534.3 44.7 535.9 46.9 529.4 48.2 515.5 51.8 506.3 55.5 503.7 57.7 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 628.9 39.3 624.8 41.2 619.6 40.8 616.4 39.5 620.9 37.3 627.8 35.9 629.2 37.7 628.9 39.3 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 620.1 30.6 620.3 32.9 617.5 35.4 611.7 39.2 604.8 39.7 601.6 38.9 605 36 598.4 36.3 602.7 32.5 606.5 32.7 614.2 31 619.1 31.3 620.1 30.6 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 580.7 33.2 580 34.9 584.4 34.1 588 34.3 585.7 36.8 580.6 39.1 566.7 39.9 554.4 42.1 548.4 42.2 549.9 40.6 560.6 38.3 542.7 38.9 538.5 38 550.2 33.2 555.6 31.8 563.9 33.5 566.8 36.4 572.9 36.8 573.6 32.1 579.4 30.3 582.5 30.8 580.7 33.2 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 636.4 28.8 638.7 30.4 646.1 30.4 647.5 32 644.7 33.8 647.8 34.9 649 36.1 653.9 36.3 659 36.7 666.1 35.7 674.2 35.2 680 35.6 682.3 37.5 681.3 39.5 677.7 40.9 671 42 666.7 41.3 654.9 42.1 646.9 42.2 641.3 41.6 632.7 40 634.3 37.2 636.4 34.8 635 32.6 628 32 625.4 30.5 629.2 28.5 636.4 28.8 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 560.7 26.2 554.9 29.9 549.6 31.6 545.8 31.8 535.9 33.9 528.8 34.7 525.2 33.6 536.9 29.9 549.1 26.8 554.6 26.9 560.7 26.2 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 641.9 26.8 640.1 26.9 633.5 26.6 634.2 25.3 641.4 25.4 643 26.2 641.9 26.8 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 583.1 25.9 574.3 27.3 571 25.8 576.1 24.3 582.1 23.8 586.2 24.5 583.1 25.9 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 590.9 21.7 585.2 22.6 579.2 22.6 580.2 21.9 585.9 20.6 587.6 20.8 590.9 21.7 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 637.7 24.2 631.1 25.2 629.5 24.1 630.1 22.4 632.3 20.5 636.7 20.7 638.4 21 640.7 22.6 637.7 24.2 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 623.9 23 622.8 24.9 617.5 24.4 613.5 22.9 605.7 22.7 611 21.4 608.2 20.3 610.4 18.5 616.5 19.1 624 20.8 623.9 23 Z"
          />
          <path
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            id="CA"
            name="Canada"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 678 16.9 680.7 18.4 674.2 19.7 663.6 23.2 656.8 23.5 650 22.9 648.4 21 650.5 19.4 654.8 18.2 648.2 18.2 646.2 16.7 646.6 14.8 651.5 12.9 655.6 11.6 659.6 11.3 659.3 10.3 667.6 10.1 669.2 12.3 673.9 13.2 678.7 14.1 678 16.9 Z"
          />
          <path
            id="CA"
            name="Canada"
            fill={visitedCountries.includes('CA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
            d="M 757.2 2.9 765.9 3.2 772.6 3.7 777.8 4.7 776.7 5.7 766.9 7.4 757.9 8.2 753.9 9.1 761.4 9.1 750.9 11.6 744.1 12.8 734.8 16.3 726.7 17 723.6 18 712.3 18.4 716.7 19 713.4 19.8 714.1 22.1 709.1 23.7 702.2 25 698.7 26.8 692.1 28.3 691.6 29.4 698.1 29.2 697 30.4 684.3 33.3 675.8 31.9 664.1 32.7 659.1 32.1 652.3 31.8 654.4 29.5 662.4 28.4 664.4 25 667 24.7 674.5 26.7 672.8 23.7 667.9 22.8 672.9 21 680.5 19.9 683.3 18.3 680.3 16.6 681.4 14.4 690.8 14.5 693 15 700.3 13.4 693 12.9 680.4 13.2 676 11.8 675.2 10.1 672.7 8.9 673.8 7.6 679.8 6.8 684 6.7 691.4 6.1 698.2 4.6 702.1 4.8 704.5 5.9 709.5 3.9 714.7 3.3 721.2 2.9 731.6 2.7 732.9 3.1 743.2 2.5 750.2 2.7 757.2 2.9 Z"
          />
          <path
            d="M1034.4 197.5l0.2 1.1-0.7 1.5 2.3 1.2 2.6 0.2-0.3 2.5-2.1 1.1-3.8-0.8-1 2.5-2.4 0.2-0.9-1-2.7 2.2-2.5 0.3-2.2-1.4-1.8-2.7-2.4 1 0-2.9 3.6-3.5-0.2-1.6 2.3 0.6 1.3-1.1 4.2 0 1-1.3 5.5 1.9z"
            id="CH"
            name="Switzerland"
            fill={visitedCountries.includes('CH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1602.2 381.9 1597.9 385 1593 383 1592 377.5 1594.2 374.6 1600 372.8 1603.3 372.9 1604.9 375.4 1602.9 378.2 1602.2 381.9 Z"
            name="China"
            id="CN"
            fill={visitedCountries.includes('CN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1625.6 185.5 1634.6 190 1640.6 195.8 1648.2 195.8 1650.8 193.4 1657.7 191.5 1659 197.2 1658.7 199.5 1661.5 206.3 1662.1 212.5 1655.2 211.4 1652.3 213.6 1657 219 1660.9 226.5 1658.4 226.6 1660.3 229.9 1654.8 226.1 1654.8 229.7 1648.4 232.4 1651.2 235.8 1646.6 235.5 1643 233.5 1641.9 238.1 1638 241.5 1635.9 245.6 1629.6 247.4 1627.2 250.4 1622.4 252.2 1623.7 249.2 1621.4 246.7 1623.4 242.4 1618.9 239.1 1615.5 241.3 1611.9 245.8 1610.6 249.9 1605.6 250.2 1604.3 253.2 1609.1 257.5 1613.9 258.6 1615.3 261.4 1620.4 263.3 1624.2 258.7 1630.1 261.2 1633.6 261.4 1635.9 264.7 1629.2 266.5 1628.2 270 1624.4 273.2 1623.5 277.7 1630.6 281.2 1635.2 287.5 1640.7 293.4 1646.2 298.3 1647.8 303.1 1645 304.9 1647.4 308.3 1651.3 310.3 1652.1 315.5 1652.2 320.6 1649.4 321.2 1647.3 328.1 1645 336.6 1641.6 344.2 1635.2 350.1 1628.6 355.6 1622.5 356.3 1619.6 359.1 1617.3 357.1 1614.8 360.2 1607.6 363.5 1601.8 364.4 1601.1 371.2 1598 371.6 1595.8 366.9 1596.7 364.5 1588.9 362.4 1586.5 363.5 1580.6 361.8 1577.5 359.2 1577.8 355.5 1572.5 354.3 1569.4 351.9 1565.3 355.3 1560 356.1 1555.6 356 1552.9 357.6 1550.2 358.5 1552.2 365.9 1549.2 365.7 1548.4 364.2 1547.9 361.5 1544.1 363.4 1541.5 362.2 1537 359.8 1537.8 354.5 1534.1 353.2 1531.7 347.3 1526.1 348.4 1525.4 340.8 1529.6 335.4 1528.7 330.1 1527.4 325.2 1524.7 323.7 1522 319.9 1518.9 320.4 1512.8 319.4 1514 316.7 1510.4 312.7 1507.2 315.4 1502.3 313.9 1496.9 317.9 1493 322.7 1488.8 323.5 1486 321.8 1483.1 321.6 1478.8 320.2 1476.2 321.8 1473.6 326.6 1472.1 321.5 1469 322.9 1462.5 322.2 1456 320.8 1451 317.9 1446.5 316.7 1444 313.6 1440.7 312.7 1434.3 308.5 1429.5 306.5 1427.6 308 1419 303.5 1412.8 299.5 1409.6 292.4 1413.7 293.3 1413.1 290 1410.1 286.7 1409.3 281.5 1401.6 273.9 1392.1 271.4 1389.2 266.4 1384.5 263.4 1383 261.6 1381.2 258 1380.7 255.5 1377 254 1375.5 254.7 1372.4 248.7 1373.5 247.3 1372.3 245.8 1376.4 242.8 1379.6 241.5 1385.4 242.4 1386 238.3 1392.4 237.6 1393.4 235 1400.3 231.6 1400.5 230.2 1398.8 226.5 1401.7 224.9 1392.9 213.9 1402 211.4 1404 210 1403 198.7 1413.8 200.8 1415.4 197.9 1412.9 191.7 1416.7 191.1 1418.6 186.9 1420.3 186.4 1423.6 190.8 1429.3 194.1 1437.5 196.4 1443.3 201.5 1444.7 208.8 1447.7 211.6 1454.2 212.7 1461.4 213.5 1469.4 217.5 1472.8 218.2 1477.8 224 1482.5 227.8 1488.1 227.6 1499.4 229.1 1505.8 228.2 1511.4 229.1 1520.8 233 1527 233 1530.3 234.9 1534.7 231.5 1541.9 229.3 1549.5 229.1 1554.4 226.9 1556.4 223.5 1558.8 221.3 1556.9 219.2 1554 216.8 1554.5 212.7 1557.7 213.3 1563.6 214.6 1566.8 211.2 1573.2 208.8 1574.5 204.6 1577 202.8 1583.8 202 1588.2 202.7 1587.4 200.5 1580.2 196.1 1575 194.1 1572.5 196.4 1567 195.4 1564.7 196.2 1561.9 193.7 1561.6 187.4 1561 182.7 1568.4 185.1 1572.8 181.2 1570.9 178.4 1570.7 171.9 1572 169.9 1569.5 166.5 1565.8 165.1 1567.5 162 1572.6 160.9 1578.8 160.7 1587.4 162.6 1593.4 164.8 1601.1 171 1604.9 173.7 1609.4 177.5 1615.6 183.5 1625.6 185.5 Z"
            name="China"
            id="CN"
            fill={visitedCountries.includes('CN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M955.9 435.2l2.5 1.4 1 2.2 2.5 1.3 2-1.6 2.6-0.2 3.9 1.6 1.5 9.2-2.4 5.3-1.5 7.3 2.4 5.5-0.2 2.6-2.6 0-3.9-1.2-3.7 0-6.7 1.2-3.9 1.8-5.6 2.4-1.1-0.2 0.4-5.3 0.6-0.8-0.2-2.5-2.4-2.7-1.8-0.4-1.6-1.8 1.2-2.9-0.5-3.1 0.2-1.8 0.9 0 0.4-2.8-0.4-1.3 0.5-0.9 2.1-0.7-1.4-5.2-1.3-2.6 0.5-2.2 1.1-0.5 0.8-0.6 1.5 1 4.4 0 1-1.8 1 0.1 1.6-0.7 0.9 2.7 1.3-0.8 2.4-1z"
            id="CI"
            name="Côte d'Ivoire"
            fill={visitedCountries.includes('CI') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1072.8 454.2l-2.8 6.5-1.4 1.1-0.4 5 0.6 2.7-0.5 1.9 2.7 3.4 0.5 2.3 2.1 3.3 2.6 2.1 0.3 2.9 0.6 1.9-0.4 3.4-4.5-1.5-4.6-1.7-7.1-0.2-0.7-0.4-3.4 0.8-3.4-0.8-2.7 0.4-9.3-0.1 0.9-5.1-2.3-4.3-2.6-1-1.1-2.9-1.5-0.9 0.1-1.8 1.4-4.6 2.7-6.2 1.6 0 3.4-3.8 2.1-0.1 3.2 2.7 3.9-2.2 0.5-2.7 1.3-2.6 0.8-3.2 3-2.6 1.1-4.5 1.2-1.5 0.8-3.3 1.4-4.1 4.7-5 0.3-2.1 0.6-1.2-2.3-2.5 0.2-2.1 1.5-0.3 2.3 4.1 0.5 4.2-0.2 4.3 3.2 5.8-3.2 0-1.6 0.4-2.6-0.6-1.2 3 3.4 3.8 2.5 1.1 0.8 2.6 1.8 4.4-0.8 1.8z"
            id="CM"
            name="Cameroon"
            fill={visitedCountries.includes('CM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1141.3 468.2l3.5 5.3 2.6 0.8 1.5-1.1 2.6 0.4 3.1-1.3 1.4 2.7 5.1 4.3-0.3 7.5 2.3 0.9-1.9 2.2-2.1 1.8-2.2 3.3-1.2 3-0.3 5.1-1.3 2.5-0.1 4.8-1.6 1.8-0.2 3.8-0.8 0.5-0.6 3.6 1.4 2.9 0.1 1-1.2 10.3 1.5 3.6-1 2.7 1.8 4.6 3.4 3.5 0.7 3.5 1.6 1.7-0.3 1.1-0.9-0.3-7.7 1.1-1.5 0.8-1.7 4.1 1.2 2.8-1.1 7.6-0.9 6.4 1.5 1.2 3.9 2.5 1.6-1.2 0.2 6.9-4.3 0-2.2-3.5-2-2.8-4.3-0.9-1.2-3.3-3.5 2-4.4-0.9-1.9-2.9-3.5-0.6-2.7 0.1-0.3-2-1.9-0.1-2.6-0.4-3.5 1-2.4-0.2-1.4 0.6 0.4-7.6-1.8-2.4-0.4-4 0.9-3.9-1.1-2.4-0.1-4.1-6.8 0.1 0.5-2.3-2.9 0-0.3 1.1-3.5 0.3-1.5 3.7-0.9 1.6-3.1-0.9-1.8 0.9-3.8 0.5-2.1-3.3-1.3-2.1-1.6-3.9-1.3-4.7-16.7-0.1-2 0.7-1.7-0.1-2.3 0.9-0.8-2 1.4-0.7 0.2-2.8 1-1.6 2-1.4 1.5 0.7 2-2.5 3.1 0.1 0.3 1.8 2.1 1.1 3.4-4 3.3-3.1 1.4-2.1-0.1-5.3 2.5-6.2 2.6-3.3 3.7-3.1 0.7-2 0.1-2.4 0.9-2.2-0.3-3.7 0.7-5.7 1.1-4 1.7-3.4 0.3-3.9 0.5-4.5 2.2-3.2 3-2.1 4.7 2.2 3.6 2.4 4.1 0.6 4.3 1.3 1.6-3.9 0.8-0.5 2.6 0.6 6.3-3.2 2.2 1.4 1.8-0.2 0.9-1.6 2.1-0.5 4.2 0.7 3.7 0.1 1.8-0.7z"
            id="CD"
            name="Democratic Republic of the Congo"
            fill={visitedCountries.includes('CD') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1090.9 479.3l-0.3 3.9-1.7 3.4-1.1 4-0.7 5.7 0.3 3.7-0.9 2.2-0.1 2.4-0.7 2-3.7 3.1-2.6 3.3-2.5 6.2 0.1 5.3-1.4 2.1-3.3 3.1-3.4 4-2.1-1.1-0.3-1.8-3.1-0.1-2 2.5-1.5-0.7-2.1-2.2-1.7 1.1-2.3 2.8-4.6-6.8 4.3-3.6-2.1-4.2 2-1.6 3.8-0.8 0.4-2.9 3.1 3.1 5 0.3 1.7-3 0.7-4.3-0.6-5-2.7-3.8 2.5-7.5-1.4-1.2-4.2 0.5-1.6-3.3 0.4-2.8 7.1 0.2 4.6 1.7 4.5 1.5 0.4-3.4 3-6 3.3-3.4 3.9 1.1 3.6 0.3z"
            id="CG"
            name="Republic of Congo"
            fill={visitedCountries.includes('CG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M584.4 426.2l-3.7 1.1-1.6 3.2-2.3 1.8-1.8 2.4-0.9 4.6-1.8 3.8 2.9 0.4 0.6 2.9 1.2 1.5 0.3 2.5-0.7 2.4 0.1 1.4 1.4 0.5 1.2 2.2 7.3-0.6 3.3 0.8 3.8 5.6 2.3-0.7 4.1 0.3 3.2-0.7 2 1.1-1.2 3.4-1.3 2.2-0.6 4.6 1.1 4.3 1.5 1.9 0.2 1.4-2.9 3.2 2 1.4 1.5 2.3 1.6 6.4-1.1 0.8-1-3.8-1.6-2.1-1.9 2.3-11-0.2 0 4 3.3 0.7-0.2 2.5-1.1-0.7-3.2 1-0.1 4.7 2.6 2.4 0.9 3.6-0.1 2.8-2.2 17.6-2.9-3.4-1.7-0.1 3.5-6.6-4.4-3-3.4 0.6-2.1-1.1-3.1 1.7-4.2-0.9-3.5-6.7-2.6-1.6-1.8-3.1-3.8-3-1.5 0.6-2.4-1.5-2.8-2.1-1.6 1-4.8-0.9-1.4-2.8-1.1 0.1-5.6-3.6-0.7-2 2.1-0.5-0.2-3.2 1.4-2.4 2.8-0.4 2.5-4 2.2-3.4-2-1.5 1.2-3.7-1.1-5.9 1.3-1.7-0.7-5.4-2.2-3.5 0.9-3.1 1.8 0.5 1.1-1.9-1.1-3.8 0.7-0.9 2.9 0.2 4.5-4.5 2.4-0.7 0.1-2.1 1.4-5.5 3.4-2.9 3.5-0.2 0.6-1.3 4.4 0.5 4.6-3.2 2.3-1.4 2.9-3.1 2 0.4 1.3 1.7-1.2 2.1z"
            id="CO"
            name="Colombia"
            fill={visitedCountries.includes('CO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M514.6 431.6l1.2 3.5 2 2.6 2.5 2.7-2.2 0.6-0.1 2.6 1.1 0.9-0.9 0.8 0.2 1.1-0.6 1.3-0.3 1.3-3-1.4-1.1-1.4 0.7-1.1-0.1-1.4-1.5-1.5-2.2-1.3-1.8-0.8-0.3-1.9-1.4-1.1 0.2 1.8-1.2 1.6-1.2-1.8-1.7-0.7-0.7-1.2 0.1-2 0.9-2-1.5-0.9 1.4-1.3 0.9-0.8 3.6 1.7 1.3-0.8 1.8 0.5 0.8 1.3 1.7 0.5 1.4-1.4z"
            id="CR"
            name="Costa Rica"
            fill={visitedCountries.includes('CR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M544.8 355.7l1.9 2.3 5.2-0.7 1.8 1.5 4.2 4 3.2 2.9 1.8-0.1 3.2 1.3-0.6 1.8 4 0.3 3.9 2.6-0.8 1.5-3.8 0.8-3.8 0.3-3.7-0.5-8.1 0.6 4.2-3.5-2.1-1.7-3.6-0.4-1.7-1.9-0.8-3.6-3.2 0.2-5-1.7-1.5-1.4-7.1-1-1.8-1.2 2.3-1.6-5.4-0.3-4.4 3.3-2.3 0.1-1 1.6-2.8 0.7-2.3-0.7 3.2-1.9 1.5-2.4 2.7-1.4 3-1.2 4.3-0.6 1.4-0.8 4.7 0.5 4.4 0.1 4.9 2.2z"
            id="CU"
            name="Cuba"
            fill={visitedCountries.includes('CU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1059.7 175.2l2.5 2 3.7 0.5-0.2 1.7 2.8 1.3 0.6-1.6 3.4 0.7 0.7 2 3.7 0.3 2.6 3.1-1.5 0-0.7 1.1-1.1 0.3-0.2 1.4-0.9 0.3-0.1 0.6-1.6 0.6-2.2-0.1-0.6 1.4-2.4-1.2-2.3 0.3-4-1.9-1.7 0.5-2.6 2.6-3.8-2.1-3-2.6-2.6-1.5-0.7-2.7-1-1.8 3.4-1.3 1.7-1.6 3.5-1.2 1.1-1.2 1.3 0.7 2.2-0.6z"
            id="CZ"
            name="Czech Republic"
            fill={visitedCountries.includes('CZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1053.9 158.9l1.4 3.1-1.2 1.7 1.9 2.1 1.5 3.3-0.2 2.2 2.4 3.9-2.2 0.6-1.3-0.7-1.1 1.2-3.5 1.2-1.7 1.6-3.4 1.3 1 1.8 0.7 2.7 2.6 1.5 3 2.6-1.6 2.9-1.7 0.8 1 4.1-0.4 1.1-1.7-1.3-2.4-0.2-3.5 1.1-4.4-0.3-0.6 1.7-2.7-1.7-1.4 0.3-5.5-1.9-1 1.3-4.2 0 0.4-4.5 2.4-4.2-7.2-1.2-2.4-1.6 0.2-2.7-1-1.4 0.4-4.2-1.1-6.5 2.9 0 1.2-2.3 0.9-5.6-0.9-2.1 0.8-1.3 4-0.3 1 1.3 3.1-3-1.3-2.3-0.4-3.4 3.7 0.8 2.9-0.9 0.3 2.3 4.9 1.4 0.1 2.2 4.7-1.2 2.6-1.6 5.6 2.4 2.4 1.9z"
            id="DE"
            name="Germany"
            fill={visitedCountries.includes('DE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1229.5 428.2l-1.9 3.5-1.3-1.2-1.3 0.5-3.2-0.1-0.2-2-0.5-1.8 1.8-3 1.9-2.8 2.4 0.6 1.7-1.6 1.4 2-0.1 2.6-3.1 1.6 2.4 1.7z"
            id="DJ"
            name="Djibouti"
            fill={visitedCountries.includes('DJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1046.1 147.7 1043.7 152.6 1038.5 149.1 1037.6 146.6 1044.4 144.6 1046.1 147.7 Z"
            id="DK"
            name="Denmark"
            fill={visitedCountries.includes('DK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1033.3 151.5 1030.4 152.4 1026.7 151.6 1024.6 148.2 1024.2 142.1 1024.8 140.4 1026.1 138.6 1030.1 138.3 1031.7 136.6 1035.3 134.9 1035.3 138 1034.1 140 1034.8 141.6 1037.4 142.5 1036.4 144.8 1035 144.2 1031.9 148.5 1033.3 151.5 Z"
            id="DK"
            name="Denmark"
            fill={visitedCountries.includes('DK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M585.7 386l0.3-1.8-1.3-1.9 1.5-1.1 0.7-2.5-0.1-3.4 0.8-1.1 4.3 0 3.2 1.6 1.5-0.1 0.7 2.3 3.1-0.2-0.4 1.9 2.5 0.3 2.5 2.3-2.3 2.6-2.6-1.4-2.6 0.3-1.8-0.3-1.1 1.2-2.2 0.4-0.7-1.6-1.9 0.9-2.7 4.4-1.3-1-0.1-1.8z"
            id="DO"
            name="Dominican Republic"
            fill={visitedCountries.includes('DO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1031 264.6l-1 3.3 1 6.1-1.1 5.3-3.2 3.6 0.6 4.8 4.5 3.9 0.1 1.5 3.4 2.6 2.6 11.5 1.9 5.7 0.4 3-0.8 5.2 0.4 3-0.6 3.5 0.6 4-2.2 2.7 3.4 4.7 0.2 2.7 2.1 3.6 2.5-1.2 4.5 3 2.5 4-18.8 12.3-16 12.6-7.8 2.8-6.2 0.7-0.1-4.1-2.6-1.1-3.5-1.8-1.3-3-18.7-14-18.6-14-20.5-15.6 0.1-1.2 0.1-0.4 0.1-7.6 8.9-4.8 5.4-1 4.5-1.7 2.1-3.2 6.4-2.5 0.3-4.8 3.1-0.6 2.5-2.3 7.1-1.1 1-2.5-1.4-1.4-1.9-6.8-0.3-3.9-1.9-4.1 5.1-3.5 5.8-1.1 3.3-2.6 5.1-2 9-1.1 8.8-0.5 2.7 0.9 4.9-2.5 5.7-0.1 2.2 1.5 3.6-0.4z"
            id="DZ"
            name="Algeria"
            fill={visitedCountries.includes('DZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M559 502.8l0.8 4.9-1.7 4.1-6.1 6.8-6.7 2.5-3.4 5.6-0.9 4.3-3.1 2.7-2.5-3.3-2.3-0.7-2.3 0.5-0.3-2.3 1.6-1.5-0.7-2.7 2.9-4.8-1.3-2.8-2.1 3-3.5-2.9 1.1-1.8-1-5.8 2-1 1-4 2.1-4.1-0.3-2.6 3.1-1.4 3.9-2.5 5.6 3.6 1.1-0.1 1.4 2.8 4.8 0.9 1.6-1 2.8 2.1 2.4 1.5z"
            id="EC"
            name="Ecuador"
            fill={visitedCountries.includes('EC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1172.1 301.4l3.9 9.4 0.7 1.6-1.3 2.6-0.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-0.5 0.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1 0.4 4.2 6.8 5.8 1.1 1.3-22.1 0-21.5 0-22.3 0-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-0.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-0.6 3.9 0.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3 0.4 2.5-1.6z"
            id="EG"
            name="Egypt"
            fill={visitedCountries.includes('EG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1228.9 420.3l-1.7 1.6-2.4-0.6-2-2.1-2.5-3.7-2.6-2.1-1.5-2.2-5-2.6-3.9-0.1-1.4-1.3-3.2 1.5-3.6-2.9-1.5 4.8-6.6-1.4-0.7-2.5 2-9.5 0.3-4.2 1.7-2 4-1.1 2.7-3.6 3.6 7.4 1.9 5.9 3.2 3.1 8 6.1 3.3 3.6 3.2 3.8 1.8 2.2 2.9 1.9z"
            id="ER"
            name="Eritrea"
            fill={visitedCountries.includes('ER') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1113.7 124.6l0.9 1-2.6 3.4 2.4 5.6-1.6 1.9-3.8-0.1-4.4-2.2-2.1-0.7-3.8 1-0.1-3.5-1.5 0.8-3.3-2.1-1-3.4 5.5-1.7 5.6-0.8 5.1 0.9 4.7-0.1z"
            id="EE"
            name="Estonia"
            fill={visitedCountries.includes('EE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1207.3 408.5l3.9 0.1 5 2.6 1.5 2.2 2.6 2.1 2.5 3.7 2 2.1-1.9 2.8-1.8 3 0.5 1.8 0.2 2 3.2 0.1 1.3-0.5 1.3 1.2-1.2 2.2 2.2 3.6 2.2 3.1 2.2 2.3 18.7 7.6 4.8-0.1-15.6 19.3-7.3 0.3-5 4.5-3.6 0.1-1.5 2.1-3.9 0-2.3-2.2-5.2 2.7-1.6 2.7-3.8-0.6-1.3-0.7-1.3 0.2-1.8-0.1-7.2-5.4-4 0-1.9-2.1-0.1-3.6-2.9-1.1-3.5-7-2.6-1.5-1-2.6-3-3.1-3.5-0.5 1.9-3.6 3-0.2 0.8-1.9-0.2-5 0-0.8 1.5-6.7 2.6-1.8 0.5-2.6 2.3-5 3.3-3.1 2-6.4 0.7-5.5 6.6 1.4 1.5-4.8 3.6 2.9 3.2-1.5 1.4 1.3z"
            id="ET"
            name="Ethiopia"
            fill={visitedCountries.includes('ET') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1104.1 70.1l0.4 3.8 7.3 3.7-2.9 4.2 6.5 6.3-1.7 4.8 4.9 4.2-0.9 3.8 7.4 3.9-0.9 2.9-3.4 3.4-8 7.4-8 0.5-7.6 2.1-7.1 1.3-3.2-3.2-4.7-1.9 0.1-5.8-3-5.2 1.6-3.4 3.3-3.5 8.8-6.2 2.6-1.2-0.9-2.4-6.5-2.6-1.8-2.2-1.8-8.5-7.2-3.7-6-2.7 2.2-1.4 5.1 2.8 5.3-0.2 4.7 1.3 3.4-2.4 1.1-4 5.9-1.8 5.8 2.1-0.8 3.8z"
            id="FI"
            name="Finland"
            fill={visitedCountries.includes('FI') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1060.5 487.3l-0.4 2.8 1.6 3.3 4.2-0.5 1.4 1.2-2.5 7.5 2.7 3.8 0.6 5-0.7 4.3-1.7 3-5-0.3-3.1-3.1-0.4 2.9-3.8 0.8-2 1.6 2.1 4.2-4.3 3.6-5.8-6.5-3.7-5.3-3.5-6.6 0.2-2.2 1.3-2 1.3-4.7 1.2-4.8 1.9-0.3 8.2 0 0-7.7 2.7-0.4 3.4 0.8 3.4-0.8 0.7 0.4z"
            id="GA"
            name="Gabon"
            fill={visitedCountries.includes('GA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 956.7 158.2 953.2 157 950.2 157.1 951.4 153.8 950.5 150.6 954.5 150.3 959.4 154.1 956.7 158.2 Z"
            id="GB"
            name="United Kingdom"
            fill={visitedCountries.includes('GB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 972.6 129.5 967.5 136 972.2 135.2 977.3 135.2 976 140.1 971.7 145.5 976.6 145.8 976.9 146.5 981.1 153.6 984.3 154.6 987.2 161.6 988.6 164 994.5 165.1 993.9 169.1 991.5 170.9 993.4 174.1 989 177.3 982.5 177.2 974.1 179 971.9 177.7 968.6 180.6 964.1 179.9 960.5 182.3 958 181.1 965.3 174.6 969.7 173.2 962.1 172.2 960.8 169.7 965.9 167.8 963.4 164.5 964.4 160.5 971.5 161.1 972.3 157.5 969.2 153.8 969.1 153.7 963.4 152.6 962.3 151 964.1 148.3 962.6 146.6 960 149.5 959.9 143.6 957.7 140.6 959.6 134.4 963.4 129.6 967 130 972.6 129.5 Z"
            id="GB"
            name="United Kingdom"
            fill={visitedCountries.includes('GB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1215.7 227.9l5.1 1.3 2.1 2.6 3.6 1.5-1.2 0.8 3.3 3.5-0.6 0.7-2.9-0.3-4.2-1.9-1.1 1.1-7 1-5.6-3.2-5.5 0.3 0.3-2.7-2.1-4.3-3.4-2.4-3-0.7-2.2-1.9 0.4-0.8 4.6 1.1 7.7 1 7.6 3.1 1.2 1.2 2.9-1z"
            id="GE"
            name="Georgia"
            fill={visitedCountries.includes('GE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M986.5 431.1l-0.4 2 2.3 3.3 0 4.7 0.6 5 1.4 2.4-1.3 5.7 0.5 3.2 1.5 4.1 1.3 2.3-8.9 3.7-3.2 2.2-5.1 1.9-5-1.8 0.2-2.6-2.4-5.5 1.5-7.3 2.4-5.3-1.5-9.2-0.8-4.8 0.2-3.7 9.8-0.3 2.5 0.5 1.8-1 2.6 0.5z"
            id="GH"
            name="Ghana"
            fill={visitedCountries.includes('GH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M921.5 421.9l0.3 2.4 0.9 0 1.5-0.9 0.9 0.2 1.6 1.7 2.4 0.5 1.5-1.4 1.9-0.9 1.3-0.9 1.1 0.2 1.3 1.4 0.6 1.8 2.3 2.7-1.1 1.6-0.3 2.1 1.2-0.6 0.7 0.7-0.3 1.9 1.7 1.9-1.1 0.5-0.5 2.2 1.3 2.6 1.4 5.2-2.1 0.7-0.5 0.9 0.4 1.3-0.4 2.8-0.9 0-1.6-0.2-1.1 2.6-1.6 0-1.1-1.4 0.4-2.6-2.4-3.9-1.4 0.7-1.3 0.2-1.5 0.3 0.1-2.3-0.9-1.7 0.2-1.9-1.2-2.7-1.6-2.3-4.5 0-1.3 1.2-1.6 0.2-1 1.4-0.6 1.7-3.1 2.9-2.4-3.8-2.2-2.5-1.4-0.9-1.4-1.3-0.6-2.8-0.8-1.4-1.7-1.1 2.6-3.1 1.7 0.1 1.5-1 1.2-0.1 0.9-0.8-0.4-2.1 0.6-0.7 0.1-2.2 2.7 0.1 4.1 1.5 1.2-0.1 0.4-0.7 3.1 0.5 0.8-0.4z"
            id="GN"
            name="Guinea"
            fill={visitedCountries.includes('GN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M891.6 417.4l0.8-2.9 6.1-0.1 1.3-1.6 1.8-0.1 2.2 1.6 1.7 0 1.9-1 1.1 1.8-2.5 1.5-2.4-0.2-2.4-1.3-2.1 1.5-1 0-1.4 0.9-5.1-0.1z"
            id="GM"
            name="The Gambia"
            fill={visitedCountries.includes('GM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M909.2 421l-0.1 2.2-0.6 0.7 0.4 2.1-0.9 0.8-1.2 0.1-1.5 1-1.7-0.1-2.6 3.1-2.9-2.6-2.4-0.5-1.3-1.8 0.1-1-1.7-1.3-0.4-1.4 3-1 1.9 0.2 1.5-0.8 10.4 0.3z"
            id="GW"
            name="Guinea-Bissau"
            fill={visitedCountries.includes('GW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1050.3 487.3l0 7.7-8.2 0-1.9 0.3-1.1-0.9 1.9-7.2 9.3 0.1z"
            id="GQ"
            name="Equatorial Guinea"
            fill={visitedCountries.includes('GQ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1112.7 272.6 1115.8 274.8 1119.9 274.4 1123.9 274.8 1123.9 276 1126.7 275.2 1126.2 277.1 1118.6 277.6 1118.5 276.6 1111.9 275.3 1112.7 272.6 Z"
            id="GR"
            name="Greece"
            fill={visitedCountries.includes('GR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1121.9 239.9 1118.7 239.7 1116 239.1 1109.8 240.7 1113.8 244.3 1111.3 245.4 1108.4 245.4 1105.3 242.1 1104.4 243.5 1106 247.3 1108.9 250.3 1107 251.7 1110.2 254.6 1113 256.5 1113.4 260.1 1108.4 258.4 1110.2 261.7 1106.9 262.3 1109.4 268 1105.9 268.1 1101.3 265.3 1098.9 260.2 1097.6 255.9 1095.3 253 1092.3 249.3 1091.8 247.5 1094 244.4 1094.1 242.3 1095.8 241.4 1095.7 239.7 1099.1 239.2 1100.9 237.8 1103.7 237.9 1104.5 236.8 1105.5 236.6 1109.3 236.8 1113.3 235 1117.2 237.3 1121.8 236.7 1121.5 233.5 1124.2 235.2 1123.1 239.2 1121.9 239.9 Z"
            id="GR"
            name="Greece"
            fill={visitedCountries.includes('GR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M896.3 1.4l19.9 3-6.7 1.4-13 0.2-18.5 0.4 1.4 0.7 12.3-0.5 9.7 1.4 7-1.2 2.4 1.4-4.5 2.4 9.2-1.6 17.1-1.5 10 0.8 1.7 1.7-14.8 2.9-2.2 1-11.4 0.8 8.1 0.2-4.9 3.2-3.6 2.9-1.2 5.2 3.7 3.2-5.9 0.1-6.5 1.6 6.3 2.6-0.1 4.2-4.2 0.5 4.1 4.3-8.7 0.4 4 2-1.6 1.8-5.7 0.8-5.5 0.1 4.2 3.4-0.5 2.4-7.3-2.2-2.4 1.4 5 1.3 4.6 3.2 0.6 4.3-7.4 1-2.7-2.1-4.2-3 0.5 3.6-5.4 2.8 10.7 0.2 5.5 0.3-11.9 4.7-12.2 4.3-12.7 1.8-4.6 0.1-4.9 2.1-7.5 5.8-10.2 3.9-3 0.3-6.1 1.3-6.6 1.4-4.8 3.4-1.4 4-3.4 3.8-8.6 4.6 0.3 4.5-3.6 4.8-4.1 5.7-6.5 0.4-5-4.8-9-0.1-3.2-3.2-0.8-5.6-4.8-7.2-0.7-3.7 1.5-5.1-3.7-5.1 3.3-4.1-1.9-2 7-6.4 7.2-2.1 2.6-2.2 2.8-4.2-5.5 1.9-2.6 0.8-4.1 0.7-4.2-1.7 1.5-3.7 3-2.8 3.8-0.1 7.6 1.5-5.3-3.4-2.7-1.8-4.4 0.7-2.6-1.3 7-4.8-1.3-2-1.1-3.5-1.4-5.4-3.6-1.9 1.4-2.1-8.1-2.9-7.7-0.4-10.1 0.2-9.5 0.4-3.1-1.6-3.8-3.1 11-1.5 7.6-0.2-14.6-1.3-6.5-1.9 2.2-1.8 15.7-2.2 15-2.2 2.8-1.6-8.1-1.6 4.6-1.7 14.7-2.9 5.4-0.4 0.2-1.8 9-1.1 11-0.6 10.4 0 2.8 1.2 10.6-2.2 7.1 1.5 4.6 0.3 6.2 1.3-6.7-2.1 1.6-1.7 12.7-2.2 11.6 0.2 5.1-1.4 11.9-0.3 26.3 0.4z"
            id="GL"
            name="Greenland"
            fill={visitedCountries.includes('GL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M488.1 387.5l-0.7 5.1-1.3 7.2 1.7 0 1.7 1.2 0.6-1 1.5 0.8-2.8 2.5-2.9 1.8-0.5 1.2 0.3 1.3-1.3 1.6-1.4 0.4 0.3 0.8-1.2 0.7-2 1.6-0.3 0.9-2.8-1.1-3.5-0.1-2.4-1.3-2.8-2.6 0.4-1.9 0.8-1.5-0.7-1.2 3.3-5.2 7.2 0 0.4-2.2-0.8-0.4-0.5-1.4-1.9-1.5-1.8-2.1 2.5-0.1 0.5-3.6 5.2 0 5.2 0.1z"
            id="GT"
            name="Guatemala"
            fill={visitedCountries.includes('GT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M662.9 463.5l-1 5.8-3.5 1.6 0.3 1.5-1.1 3.4 2.4 4.6 1.8 0 0.7 3.6 3.3 5.6-1.3 0.3-3.2-0.6-1.8 1.7-2.6 1.1-1.8 0.3-0.6 1.3-2.8-0.3-3.5-3-0.3-3-1.4-3.3 1-5.4 1.6-2.3-1.2-3-2-0.9 0.8-2.9-1.2-1.4-3 0.2-3.7-4.8 1.6-1.8 0-3 3.5-1 1.4-1.2-1.8-2.4 0.5-2.3 4.7-3.8 3.6 2.4 3.3 4.1 0.1 3.4 2.1 0.1 3 3.1 2.1 2.3z"
            id="GY"
            name="Guyana"
            fill={visitedCountries.includes('GY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M519.6 405.5l-1.9-0.1-0.9 0.9-2 0.8-1.4 0-1.3 0.8-1.1-0.2-0.9-1-0.6 0.2-0.9 1.5-0.5-0.1-0.2 1.4-2.1 1.7-1.2 0.8-0.6 0.8-1.5-1.3-1.4 1.7-1.2 0-1.3 0.1-0.2 3.2-0.8 0-0.8 1.5-1.8 0.3-0.8-2-1.7-0.6 0.7-2.6-0.7-0.7-1.2-0.4-2.5 0.7-0.1-0.8-1.6-1.1-1.1-1.2-1.6-0.6 1.3-1.6-0.3-1.3 0.5-1.2 2.9-1.8 2.8-2.5 0.6 0.3 1.3-1.1 1.6-0.1 0.5 0.5 0.9-0.3 2.6 0.6 2.6-0.2 1.8-0.7 0.8-0.7 1.7 0.3 1.3 0.4 1.5-0.1 1.2-0.6 2.5 0.9 0.8 0.2 1.6 1.2 1.5 1.4 1.9 1 1.3 1.7z"
            id="HN"
            name="Honduras"
            fill={visitedCountries.includes('HN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1081.5 207.6l1.5 2.5 1.7 1.8-1.7 2.4-2.4-1.4-3.5 0.1-4.5-1.1-2.3 0.1-1 1.4-2-1.5-0.8 2.6 2.7 3 1.3 1.9 2.5 2.4 2.1 1.4 2.1 2.7 4.8 2.4-0.5 1-5-2.3-3.2-2.3-4.8-1.9-4.7-4.6 1-0.5-2.5-2.7-0.3-2.1-3.3-1-1.4 2.7-1.6-2.1 0-2.2 0.1-0.1 3.6 0.2 0.8-1 1.8 1 2 0.1-0.1-1.7 1.7-0.7 0.3-2.5 3.9-1.7 1.6 0.8 4 2.7 4.3 1.2 1.8-1z"
            id="HR"
            name="Croatia"
            fill={visitedCountries.includes('HR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M586.8 375.3l0.1 3.4-0.7 2.5-1.5 1.1 1.3 1.9-0.3 1.8-3.6-1.1-2.7 0.4-3.4-0.4-2.7 1.2-2.8-2 0.7-2.1 5.1 0.9 4.1 0.5 2.2-1.4-2.3-2.8 0.4-2.5-3.5-1 1.5-1.7 3.4 0.2 4.7 1.1z"
            id="HT"
            name="Haiti"
            fill={visitedCountries.includes('HT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1096.2 191.9l3 1.7 0.5 1.7-2.9 1.3-1.9 4.2-2.6 4.3-3.9 1.2-3.2-0.3-3.7 1.6-1.8 1-4.3-1.2-4-2.7-1.6-0.8-1.2-2.1-0.8-0.1 1.3-4-1.1-1.4 2.8 0 0.2-2.6 2.7 1.7 1.9 0.6 4.1-0.7 0.3-1.3 1.9-0.2 2.3-0.9 0.6 0.4 2.3-0.8 1-1.5 1.6-0.4 5.5 1.9 1-0.6z"
            id="HU"
            name="Hungary"
            fill={visitedCountries.includes('HU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1667.5 567.6 1665.1 567.7 1658 563.2 1663.4 561.9 1666.2 563.9 1668 565.8 1667.5 567.6 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1692.3 558.9 1692.8 560.2 1692.7 562.1 1688.6 566.9 1683.6 568.3 1683 567.6 1683.7 565.4 1686.5 561.5 1692.3 558.9 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1652.7 553.8 1654.6 555.5 1658.2 555 1659.4 557.7 1652.7 559 1648.8 559.9 1645.7 559.8 1647.9 556.1 1651.1 556.1 1652.7 553.8 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1681 553.8 1679.9 557.4 1671.3 559.2 1663.8 558.4 1664 556 1668.6 554.7 1672 556.6 1675.8 556.1 1681 553.8 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1600.8 545.3 1611.6 546 1613 543.3 1623.3 546.4 1625.1 550.6 1633.5 551.8 1640.2 555.6 1633.6 558 1627.5 555.4 1622.4 555.6 1616.6 555.1 1611.4 554 1605 551.5 1600.9 550.9 1598.5 551.7 1588.3 549 1587.5 546.3 1582.4 545.8 1586.6 539.7 1593.4 540.1 1597.8 542.6 1600.2 543.1 1600.8 545.3 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1748.7 541.7 1745.5 546.1 1745.3 541.3 1746.4 539 1747.7 536.8 1748.9 538.7 1748.7 541.7 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1707.3 524 1705.1 526.2 1701.3 525 1700.3 522.2 1706 521.9 1707.3 524 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1725.7 521.7 1727.5 526.6 1722.9 523.9 1718.2 523.4 1714.9 523.8 1711 523.6 1712.5 520.1 1719.5 519.8 1725.7 521.7 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1785.5 518.5 1784.5 539.4 1782.9 560.4 1778.3 555.1 1772.7 553.8 1771.2 555.6 1764 555.8 1766.8 550.6 1770.5 548.8 1769.5 541.8 1767.2 536.5 1756.5 531 1751.9 530.5 1743.6 524.5 1741.8 527.7 1739.6 528.2 1738.5 525.9 1738.6 523.1 1734.4 519.9 1740.6 517.6 1744.6 517.7 1744.2 516 1735.9 516 1733.7 512.2 1728.7 511 1726.4 507.8 1734 506.3 1736.9 504.2 1746 506.8 1746.9 509.2 1748.2 519.6 1753.9 523.4 1758.9 516.6 1765.5 512.8 1770.5 512.8 1775.3 515 1779.4 517.3 1785.5 518.5 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1696.4 492.7 1691.9 499.1 1687.6 500.3 1682.2 499.1 1672.7 499.4 1667.8 500.3 1667 505.2 1672 510.9 1675.1 508 1685.7 505.8 1685.2 508.7 1682.7 507.8 1680.2 511.6 1675.1 514.1 1680.2 522.3 1679.1 524.5 1683.9 531.9 1683.6 536.1 1680.5 538 1678.4 535.7 1681.4 530.5 1675.7 533 1674.4 531.2 1675.2 528.7 1671.3 524.9 1672 518.7 1668.1 520.6 1668.3 528.1 1668.1 537.3 1664.4 538.2 1662.1 536.4 1664 530.5 1663.4 524.3 1661 524.2 1659.4 519.8 1661.9 515.6 1662.8 510.5 1665.8 500.8 1666.9 498.2 1671.7 493.4 1676.2 495.3 1683.3 496.2 1689.8 495.9 1695.4 491.3 1696.4 492.7 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1716 494.6 1715.7 500.2 1712.8 499.5 1711.9 503.4 1714.2 506.8 1712.6 507.6 1710.4 503.5 1708.7 495.3 1709.7 490.2 1711.5 487.9 1712 491.4 1715.4 491.9 1716 494.6 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1608 488.9 1609 493.2 1612.9 496.9 1616.6 495.6 1620.2 496 1623.5 492.8 1626.2 492.2 1631.6 494 1636.2 492.6 1638.8 483.7 1640.9 481.5 1642.6 474.2 1649.1 474.2 1654.1 475.3 1651.1 481.1 1655.5 487.1 1654.6 490.1 1661 496 1654.3 496.8 1652.5 501.2 1652.7 507 1647.2 511.4 1646.8 517.8 1644.3 527.6 1643.6 525.3 1637 528.2 1634.9 524.3 1630.9 523.9 1628.1 521.8 1621.3 524.2 1619.4 521 1615.6 521.4 1611 520.7 1610.4 512.1 1607.6 510.3 1604.9 504.8 1604.1 499.2 1604.7 493.2 1608 488.9 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1585.2 539.4 1579 539.5 1574.5 534.2 1567.4 528.9 1565.1 525 1561 519.8 1558.3 515 1554.1 506 1549.2 500.6 1547.5 495.1 1545.3 490.1 1540.1 486.1 1537 480.6 1532.6 477 1526.4 469.9 1525.8 466.6 1529.4 466.9 1538.3 468.1 1543.5 474.4 1548.1 478.8 1551.3 481.4 1556.8 488.3 1562.6 488.4 1567.4 492.8 1570.8 498.2 1575.1 501.2 1572.8 506.4 1576.1 508.6 1578.1 508.8 1579 513.3 1580.9 516.8 1585 517.4 1587.6 521.5 1585.9 529.5 1585.2 539.4 Z"
            id="ID"
            name="Indonesia"
            fill={visitedCountries.includes('ID') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1427.6 308l-2.8 3-0.9 6 5.8 2.4 5.8 3.1 7.8 3.6 7.7 0.9 3.8 3.2 4.3 0.6 6.9 1.5 4.6-0.1 0.1-2.5-1.5-4.1-0.2-2.7 3.1-1.4 1.5 5.1 0.4 1.2 5.5 2.5 3.2-1 4.7 0.4 4.5-0.2-0.5-3.9-2.6-2.1 4.2-0.8 3.9-4.8 5.4-4 4.9 1.5 3.2-2.7 3.6 4-1.2 2.7 6.1 1 1 2.4-1.7 1.2 1.4 3.9-4.2-1.1-6.2 4.4 0.9 3.7-2 5.4 0.3 3.1-1.6 5.3-4.6-1.5 0.9 6.7-1 2.2 1 2.7-2.5 1.5-4.4-10.2-1.5 0-0.3 4.2-3.6-3.4 1.2-3.6 2.4-0.4 1.6-5.4-3.4-1.1-5.1 0.1-5.4-0.9-1.2-4.5-2.7-0.3-4.9-2.8-1.2 4.4 4.6 3.4-3 2.4-0.9 2.3 3.7 1.7-0.3 3.9 2.6 4.8 1.6 5.3-0.5 2.4-3.8-0.1-6.6 1.3 0.9 4.8-2.4 3.8-7.5 4.4-5.3 7.5-3.8 4.1-5 4.2 0.3 2.9-2.6 1.6-4.8 2.3-2.6 0.3-1.2 4.9 1.9 8.4 0.7 5.3-1.9 6.1 0.7 10.9-2.9 0.3-2.3 4.9 1.9 2.2-5.1 1.8-1.7 4.3-2.2 1.9-5.6-6-3.1-9-2.5-6.5-2.2-3-3.4-6.2-2-8-1.4-4-5.9-8.8-3.5-12.5-2.6-8.2-0.8-7.8-1.7-6-7.7 3.9-4-0.8-8.1-7.8 2.4-2.3-1.9-2.5-7.1-5.5 3.2-4.3 12.1 0-1.8-5.5-3.5-3.2-1.4-5-4-2.8 4.9-6.8 6.5 0.5 4.5-6.7 2.2-6.5 3.9-6.5-1-4.6 3.8-3.7-5.1-3.1-2.9-4.4-3.3-5.6 2-2.8 8.5 1.6 5.7-1 3.8-5.4 7.7 7.6 0.8 5.2 3 3.3 0.6 3.3-4.1-0.9 3.2 7.1 6.2 4 8.6 4.5z"
            id="IN"
            name="India"
            fill={visitedCountries.includes('IN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M956.7 158.2l0.7 4.4-3.9 5.5-8.8 3.6-6.8-0.9 4.3-6.4-2.1-6.2 6.7-4.8 3.7-2.8 0.9 3.2-1.2 3.3 3-0.1 3.5 1.2z"
            id="IE"
            name="Ireland"
            fill={visitedCountries.includes('IE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1229 253.2l1.8-0.2 5.3-4.7 1.9-0.5 1.9 1.9-1.2 3.1 3.9 3.4 1.3-0.4 2.5 4.8 5.3 1.3 4.3 3.2 7.7 1.1 8-1.7 0.2-1.5 4.4-1.2 3-3.7 3.6 0.2 2-1.2 3.9 0.6 6.6 3.3 4.3 0.7 7.3 5.6 4 0.3 1.7 5.3-0.6 8-0.5 4.7 2.5 1-1.6 3.5 2.7 5.1 1.2 4.1 4.3 1.1 1.1 4.1-3.9 5.8 3.2 3.4 2.8 3.9 5.7 2.8 1 5.6 2.7 1.1 0.9 2.9-7.5 3.4-1.1 7.4-10.6-1.9-6.2-1.5-6.3-0.8-3.3-7.9-2.8-1.1-4.1 1.1-5.1 3.1-7-2.1-6.1-5-5.5-1.8-4.4-6.1-5.2-8.5-2.8 1-3.7-2.1-1.7 2.5-3.5-3.4-0.5-3.4-1.7 0 0.2-4.7-3.5-4.8-7.1-3.6-4.6-6.1 0.5-5 2.3-2.2-0.9-3.7-3.8-2-4.7-7.6-3.8-5.1 0.7-2-2.9-7.3 3.3-1.9 1.2 2.5 3.2 2.9 3.8 0.9z"
            id="IR"
            name="Iran"
            fill={visitedCountries.includes('IR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1223.5 263.2l4.7 7.6 3.8 2 0.9 3.7-2.3 2.2-0.5 5 4.6 6.1 7.1 3.6 3.5 4.8-0.2 4.7 1.7 0 0.5 3.4 3.5 3.4-3.3-0.3-3.7-0.6-3.3 6.2-10.2-0.5-16.8-12.9-8.6-4.5-6.8-1.8-3.1-7.8 11-6.7 1-7.7-1.2-4.7 2.7-1.6 2.1-4 2.1-1 6.3 0.9 2.1 1.6 2.4-1.1z"
            id="IQ"
            name="Iraq"
            fill={visitedCountries.includes('IQ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M924.8 84.5l-1.4 3.6 4.4 3.8-6.1 4.3-13.1 3.9-3.9 1.1-5.6-0.9-11.9-1.8 4.8-2.5-9-2.7 7.9-1.1 0.1-1.7-8.8-1.3 3.6-3.7 6.6-0.8 6 3.8 7-3 5.1 1.5 7.3-2.9 7 0.4z"
            id="IS"
            name="Iceland"
            fill={visitedCountries.includes('IS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1179.1 288.2l0.4 2.6-0.6 1 0.1 0-0.7 2-2.1-0.8-0.7 4.2 1.5 0.7-1.3 0.9-0.1 1.7 2.5-0.8 0.4 2.5-1.8 10.2-0.7-1.6-3.9-9.4 1.4-2.1-0.4-0.4 1.1-3 0.6-4.8 0.6-1.7 0.1 0 1.8 0 0.4-1.1 1.4-0.1z"
            id="IL"
            name="Israel"
            fill={visitedCountries.includes('IL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1068.2 256.4 1066.5 261.5 1067.4 263.4 1066.5 266.7 1062.3 264.3 1059.6 263.6 1052.1 260.4 1052.6 257.1 1058.8 257.7 1064.2 257 1068.2 256.4 Z"
            name="Italy"
            id="IT"
            fill={visitedCountries.includes('IT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1034.2 237.4 1037.5 241.9 1037.1 250.4 1034.7 250 1032.6 252.1 1030.6 250.4 1030.1 242.7 1028.8 239.1 1031.7 239.4 1034.2 237.4 Z"
            name="Italy"
            id="IT"
            fill={visitedCountries.includes('IT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1055.9 203.9 1055.5 207 1056.9 209.7 1052.8 208.7 1048.9 211 1049.3 214.1 1048.8 215.9 1050.7 219.1 1055.7 222.3 1058.6 227.6 1064.7 232.7 1068.7 232.6 1070.1 234 1068.7 235.3 1073.5 237.6 1077.5 239.5 1082.2 242.9 1082.8 244 1082 246.3 1078.9 243.3 1074.3 242.3 1072.4 246.4 1076.3 248.8 1075.9 252.1 1073.8 252.5 1071.3 258 1069.1 258.5 1069 256.5 1069.9 253.1 1071 251.7 1068.7 248 1066.9 244.8 1064.7 244 1062.9 241.3 1059.5 240.1 1057.1 237.5 1053.3 237.1 1049 234.3 1044.1 230.1 1040.4 226.5 1038.5 220.2 1035.9 219.5 1031.7 217.4 1029.4 218.2 1026.5 221.2 1024.4 221.6 1024.9 218.9 1022.1 218.1 1020.6 213.2 1022.3 211.3 1020.8 208.9 1020.9 207.1 1023.1 208.5 1025.6 208.2 1028.3 206 1029.2 207 1031.6 206.8 1032.6 204.3 1036.4 205.1 1038.5 204 1038.8 201.5 1041.9 202.4 1042.4 201.2 1047.3 200.1 1048.6 202.2 1055.9 203.9 Z"
            name="Italy"
            id="IT"
            fill={visitedCountries.includes('IT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M556.5 387.1l-1.8 1.1-3-1.1-2.9-2.3 0.8-1.5 2.4-0.4 1.3 0.2 3.7 0.6 2.7 1.5 0.8 1.8-4 0.1z"
            id="JM"
            name="Jamaica"
            fill={visitedCountries.includes('JM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1198.1 295.3l-0.9 1-10.4 3.2 6 6.5-1.6 1-0.7 2.2-4.1 0.9-1.1 2.3-2.1 2-6.2-1.1-0.3-0.9 1.8-10.2-0.4-2.5 0.6-1.9-0.4-4 0.7-2 6.3 2.6 9.7-6.9 3.1 7.8z"
            id="JO"
            name="Jordan"
            fill={visitedCountries.includes('JO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1708.5 282.6 1710.1 284.8 1708.8 288.7 1705.7 286.6 1703.6 288.1 1703.7 291.8 1699.4 290 1698.2 287 1699.5 283.1 1702.9 283.9 1703.9 281.2 1708.5 282.6 Z"
            name="Japan"
            id="JP"
            fill={visitedCountries.includes('JP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1733.1 263.4 1733.7 268.5 1736.2 271.7 1735.6 276.2 1730.2 279.2 1721 279.6 1716.6 287 1711.9 284.5 1709.5 279.7 1700.9 281.1 1695.8 284.1 1689.6 284.3 1697 289 1697.8 299.9 1695.3 302.6 1691.7 300.1 1690.8 294.3 1686.7 292.5 1682.7 288.1 1687 286.1 1688.1 282 1692 278.7 1694 274.3 1703.7 272.4 1710 273.7 1710 262.3 1715.1 265.4 1719.6 259 1721.3 256.5 1720.3 248.7 1715.2 241.5 1715 237.5 1719.8 236.3 1728 245.2 1730.8 250.3 1729.5 256.8 1733.1 263.4 Z"
            name="Japan"
            id="JP"
            fill={visitedCountries.includes('JP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1721.2 218.6 1725.7 219.9 1727.5 217.3 1733.5 224.4 1727.1 226.1 1726.7 232.4 1715.8 228.1 1717.4 235 1711.7 235.1 1707 228.8 1706.4 223.9 1711.6 223.6 1707.2 214.8 1705.4 209.9 1715.9 216.5 1721.2 218.6 Z"
            name="Japan"
            id="JP"
            fill={visitedCountries.includes('JP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1338.3 160.5l4.4-0.3 9.2-5.8-0.8 2 8.4 4.7 18.3 15.6 1.1-3.2 8.4 3.5 6.2-1.6 3.3 1.1 4.1 3.6 4 1.2 3.3 2.7 6-0.9 4.4 3.8-1.9 4.2-3.8 0.6 2.5 6.2-1.6 2.9-10.8-2.1 1 11.3-2 1.4-9.1 2.5 8.8 11-2.9 1.6 1.7 3.7-3.5-1-3.4-2.3-7.9-0.6-8.6-0.2-1.6 0.7-8.2-2.7-2.5 1.4 0.5 3.7-9.2-2.2-3.1 0.9-0.3 2.8-2.6 1.2-5.4 4.4-0.9 4.6-2 0-2.3-3-6.7-0.2-2.5-5.2-2.6-0.1-1.5-6.4-7.6-4.6-8.6 0.5-5.7 0.9-6.6-5.7-4.8-2.4-9.2-4.5-1.1-0.5-12 3.7 6.2 23.4-2.6 0.3-4.8-5-3.9-1.8-5.6 1.3-1.8 2.2-0.6-1.6 0.6-2.6-1.5-2.2-6.5-2.2-3.7-5.7-3.2-1.6-0.6-2.1 5.1 0.6-1-4.6 4.1-1 4.7 0.9-0.7-6.1-1.9-3.9-5 0.3-4.7-1.5-5.1 2.7-4.4 1.4-2.8-1.1-0.2-3.2-4.3-4.2-3.6 0.2-5.3-4.2 1.7-4.8-1.8-1.2 2.2-6.9 6 3.6-0.6-4.5 8.1-6.7 7.6-0.2 12 4.3 6.6 2.5 4.4-2.6 7.7-0.1 7.3 3.2 0.8-1.9 7 0.3 0.2-2.9-9.4-4.3 3.5-3-1.5-1.6 4-1.6-5.1-4.2 1.4-2.1 17-2.1 1.7-1.5 10.9-2.3 3.1-2.5 9.1 1.3 4.4 6.3 4.3-1.5 7.1 2.1 1.1 3.3z"
            id="KZ"
            name="Kazakhstan"
            fill={visitedCountries.includes('KZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1223.5 476.7l-4.9 7.2 0.2 23.4 3.3 5.3-4 2.6-1.4 2.7-2.2 0.4-0.8 4.6-1.9 2.6-1.1 4.2-2.3 2.1-8.1-6.4-0.3-3.7-20.5-13.1 0.4-4.7-1.4-2.5 0-0.3 1.6-2.6 2.8-4.2 2.1-4.7-2.6-7.4-0.7-3.2-2.7-4.5 3.4-3.8 3.8-4.2 2.9 1.1 0.1 3.6 1.9 2.1 4 0 7.2 5.4 1.8 0.1 1.3-0.2 1.3 0.7 3.8 0.6 1.6-2.7 5.2-2.7 2.3 2.2 3.9 0z"
            id="KE"
            name="Kenya"
            fill={visitedCountries.includes('KE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1400.5 230.2l-0.2 1.4-6.9 3.4-1 2.6-6.4 0.7-0.6 4.1-5.8-0.9-3.2 1.3-4.1 3 1.2 1.5-1.1 1.4-9.6 1-7.1-2.1-5.5 0.5-0.6-3.6 6 1 1.4-1.9 4.1 0.6 5.3-4.6-7.2-3.4-3.2 1.6-4.6-2.4 3-4.1-1.7-0.6 0.3-2.8 3.1-0.9 9.2 2.2-0.5-3.7 2.5-1.4 8.2 2.7 1.6-0.7 8.6 0.2 7.9 0.6 3.4 2.3 3.5 1z"
            id="KG"
            name="Kyrgyzstan"
            fill={visitedCountries.includes('KG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1589.8 410.6l1.8 4.3 0.1 7.7-9 5 2.8 3.8-5.9 0.5-4.6 2.6-4.8-0.9-2.6-3.4-3.5-6.6-2.1-7.8 3.1-5.3 7.1-1.2 5.3 0.9 5 2.5 2-4.4 5.3 2.3z"
            id="KH"
            name="Cambodia"
            fill={visitedCountries.includes('KH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1652.9 259.5l0-0.6 2.5 0.2 0.6-2.8 3.6-0.4 2-0.4 0-1.5 8.3 7.5 3.3 4.2 3.4 7.4-0.5 3.5-4.3 1.2-3.1 2.7-4.6 0.5-2.1-3.5-1.1-4.8-5.3-6.6 3.4-1.1-6.1-5.5z"
            id="KR"
            name="Republic of Korea"
            fill={visitedCountries.includes('KR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1247.5 309.4l1.5 2.8-0.3 1.5 2.4 4.8-3.9 0.2-1.7-3.1-5-0.6 3.3-6.2 3.7 0.6z"
            id="KW"
            name="Kuwait"
            fill={visitedCountries.includes('KW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1589.8 410.6l-5.3-2.3-2 4.4-5-2.5 1.5-2.9-0.4-5.4-5.3-5.6-1.3-6.4-5-5.2-4.3-0.4-0.8 2.2-3.2 0.2-1.9-1.1-5.3 3.8-1-5.8 0.4-6.7-3.8-0.3-0.9-3.9-2.7-2 0.8-2.3 4.1-4.2 0.8 1.5 3 0.2-2-7.4 2.7-0.9 4 5.1 3.5 5.8 6.8 0 3 5.6-3.3 1.7-1.2 2.3 7.3 3.9 5.7 7.6 4.4 5.6 4.9 4.5 2 4.5-0.2 6.4z"
            id="LA"
            name="Lao PDR"
            fill={visitedCountries.includes('LA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z"
            id="LB"
            name="Lebanon"
            fill={visitedCountries.includes('LB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M938.6 452.5l-0.2 1.8 0.5 3.1-1.2 2.9 1.6 1.8 1.8 0.4 2.4 2.7 0.2 2.5-0.6 0.8-0.4 5.3-1.5 0.1-5.8-3.1-5.2-4.9-4.8-3.5-3.8-4.1 1.4-2.1 0.3-1.9 2.6-3.4 2.6-3 1.3-0.2 1.4-0.7 2.4 3.9-0.4 2.6 1.1 1.4 1.6 0 1.1-2.6 1.6 0.2z"
            id="LR"
            name="Liberia"
            fill={visitedCountries.includes('LR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1122.6 299.1l-1.7 3.1 1 2.8-1.1 3.9 2 5.2 1.3 22.8 1 23.7 0.5 12.8-6.4 0 0 2.7-22.6-12.3-22.5-12.3-5.5 3.5-3.8 2.4-3.2-3.5-8.8-2.8-2.5-4-4.5-3-2.5 1.2-2.1-3.6-0.2-2.7-3.4-4.7 2.2-2.7-0.6-4 0.6-3.5-0.4-3 0.8-5.2-0.4-3-1.9-5.7 2.6-1.4 0.4-2.8-0.6-2.6 3.6-2.5 1.6-2.1 2.6-1.8 0.1-4.9 6.4 2.2 2.3-0.6 4.5 1.1 7.3 2.9 2.8 5.7 4.9 1.2 7.8 2.7 6 3.2 2.5-1.7 2.5-2.9-1.6-4.9 1.5-3.2 3.7-3 3.7-0.8 7.4 1.3 2 2.8 2 0.1 1.8 1.1 5.4 0.7 1.5 2.1z"
            id="LY"
            name="Libya"
            fill={visitedCountries.includes('LY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z"
            id="LK"
            name="Sri Lanka"
            fill={visitedCountries.includes('LK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1139.1 697.9l-2 0.7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1-1.1 2z"
            id="LS"
            name="Lesotho"
            fill={visitedCountries.includes('LS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1111.1 147.6l1 2.7-3.6 2-0.5 3.4-4.8 2.3-4.7 0-1.4-1.9-2.5-0.7-0.6-1.5 0.2-1.7-2.2-0.9-5.1-1.1-1.7-5.1 5.1-1.8 7.9 0.4 4.5-0.6 0.9 1.2 2.5 0.4 5 2.9z"
            id="LT"
            name="Lithuania"
            fill={visitedCountries.includes('LT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1016.9 185.4l-1.4 0.1-1.1-0.5 0.4-3.5 1.3-0.2 1 1.4-0.2 2.7z"
            id="LU"
            name="Luxembourg"
            fill={visitedCountries.includes('LU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1112.8 136.5l2.5 1.3 1 2.9 2.1 3.6-4.6 2.3-2.7 1-5-2.9-2.5-0.4-0.9-1.2-4.5 0.6-7.9-0.4-5.1 1.8-0.5-4.5 1.7-3.8 4.1-2 4.4 4.5 3.7-0.2 0.1-4.6 3.8-1 2.1 0.7 4.4 2.2 3.8 0.1z"
            id="LV"
            name="Latvia"
            fill={visitedCountries.includes('LV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M974.8 276l1.9 4.1 0.3 3.9 1.9 6.8 1.4 1.4-1 2.5-7.1 1.1-2.5 2.3-3.1 0.6-0.3 4.8-6.4 2.5-2.1 3.2-4.5 1.7-5.4 1-8.9 4.8-0.1 7.6-0.9 0 0.1 3.4-3.4 0.2-1.8 1.5-2.5 0-2-0.9-4.6 0.7-1.9 5-1.8 0.5-2.7 8.1-7.9 6.9-2 8.9-2.4 2.9-0.7 2.3-12.5 0.5-0.1 0 0.3-3 2.2-1.7 1.9-3.4-0.3-2.2 2-4.5 3.2-4.1 1.9-1 1.6-3.7 0.2-3.5 2.1-3.9 3.8-2.4 3.6-6.5 0.1-0.1 2.9-2.5 5.1-0.7 4.4-4.4 2.8-1.7 4.7-5.4-1.2-7.9 2.2-5.6 0.9-3.4 3.6-4.3 5.4-2.9 4.1-2.7 3.7-6.6 1.8-4 3.9 0.1 3.1 2.7 5.1-0.4 5.5 1.4 2.4 0z"
            id="MA"
            name="Morocco"
            fill={visitedCountries.includes('MA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1129.4 210.3l-1.3-2.9 0.2-2.7-0.6-2.7-3.4-3.8-2-2.6-1.8-1.8-1.6-0.7 1.1-0.9 3.2-0.6 4 1.9 2 0.3 2.6 1.7-0.1 2.1 2 1 1.1 2.6 2 1.6-0.2 1 1 0.6-1.3 0.5-3-0.2-0.6-0.9-1 0.5 0.6 1.1-1.1 2.1-0.6 2.1-1.2 0.7z"
            id="MD"
            name="Moldova"
            fill={visitedCountries.includes('MD') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1267.9 588.9l0.4 7.7 1.3 3-0.7 3.1-1.2 1.8-1.6-3.7-1.2 1.9 0.8 4.7-0.7 2.8-1.7 1.4-0.7 5.5-2.7 7.5-3.4 8.8-4.3 12.2-2.9 8.9-3.1 7.5-4.6 1.5-5.1 2.7-3-1.6-4.2-2.3-1.2-3.4 0-5.7-1.5-5.1-0.2-4.7 1.3-4.6 2.6-1.1 0.2-2.1 2.9-4.9 0.8-4.1-1.1-3-0.8-4.1-0.1-5.9 2.2-3.6 1-4.1 2.8-0.2 3.2-1.3 2.2-1.2 2.4-0.1 3.4-3.6 4.9-4 1.8-3.2-0.6-2.8 2.4 0.8 3.3-4.4 0.3-3.9 2-2.9 1.8 2.8 1.4 2.7 1.2 4.3z"
            id="MG"
            name="Madagascar"
            fill={visitedCountries.includes('MG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M449.3 335.9l2.2-0.2-3.2 5.7-1.8 4.6-1.8 8.6-1.1 3.1 0.4 3.5 1.3 3.2 0.4 4.9 3 4.8 0.8 3.7 1.7 3.1 5.7 1.7 1.9 2.7 5.2-1.8 4.3-0.6 4.4-1.2 3.6-1.1 3.9-2.6 1.8-3.7 1.2-5.4 1.2-1.9 4-1.7 6.1-1.5 4.9 0.3 3.4-0.6 1.2 1.4-0.6 3.1-3.5 3.8-1.8 3.9 0.9 1.1-1.2 2.8-2.1 5-1.2-1.7-1.1 0.1-1.1 0.1-2.5 3.9-0.9-0.8-0.7 0.3-0.1 1-5.2-0.1-5.2 0-0.5 3.6-2.5 0.1 1.8 2.1 1.9 1.5 0.5 1.4 0.8 0.4-0.4 2.2-7.2 0-3.3 5.2 0.7 1.2-0.8 1.5-0.4 1.9-5.6-6.9-2.6-2.1-4.4-1.7-3.2 0.5-4.8 2.4-2.9 0.6-3.7-1.7-4.1-1.2-4.8-2.9-4.1-0.9-5.9-3-4.3-3.1-1.1-1.7-3.1-0.4-5.4-2-1.9-2.9-5.4-3.7-2.2-4-0.8-3.2 1.9-0.6-0.3-1.8 1.6-1.7 0.4-2.2-1.5-2.9 0-2.5-1.3-3.3-3.8-6.4-4.6-5-1.9-4-4.1-2.6-0.7-1.6 1.7-3.9-2.4-1.5-2.5-3.2-0.2-4.4-2.8-0.6-2.3-3.3-1.7-3.2 0.3-2-1.5-4.8-0.3-4.9 0.8-2.5-3.1-2.6-1.9 0.3-2.4-1.7-1.8 2.6-0.1 3-1 4.9 1 2.6 2.8 4.4 0.4 1.6 0.7 0.4 0.1 2.2 1-0.1 0 4.2 1.3 1.6 0.5 2.3 2.7 3.2 0.4 6 1 2.8 0.9 3-0.3 3.4 2.6 0.2 1.6 2.9 1.5 2.9-0.3 1.2-2.8 2.3-1 0-0.7-3.9-2.9-3.7-3.4-3.1-2.5-1.6 1.2-4.7-0.1-3.5-2.1-2-3.1-2.8-0.9 0.8-1-1.7-3-1.5-2.2-3.8 0.5-0.4 2.1 0.3 2.7-2.4 1-2.9-2.9-4.6-2.6-1.7-0.8-4-0.6-4.3-0.8-5.1-0.2-5.8 6.3-0.5 7.1-0.7-0.9 1.3 7 3.1 10.9 4.5 10.8 0 4.3 0 0.8-2.7 9.4 0 1.3 2.3 2.1 2.1 2.4 2.8 0.8 3.3 0.4 3.6 2.3 1.9 4 1.9 4.8-5 4.5-0.2 3.2 2.6 1.6 4.4 0.9 3.8 2.4 3.6 0.2 4.5 0.9 3 3.9 2 3.6 1.4z"
            id="MX"
            name="Mexico"
            fill={visitedCountries.includes('MX') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1105.5 236.6l-1 0.2-0.8 1.1-2.8-0.1-1.8 1.4-3.4 0.5-2.3-1.5-1-2.7 0.5-2.2 0.7 0.1 0.1-1.3 2.9-1 1.2-0.3 1.7-0.3 2.4-0.2 2.8 2.1 0.8 4.2z"
            id="MK"
            name="Macedonia"
            fill={visitedCountries.includes('MK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1010.2 378.8l0.1 14.8-3.1 4.3-0.4 4-5 1-7.7 0.5-2 2.3-3.6 0.3-3.6 0-1.4-1.2-3.1 0.9-5.3 2.7-1.1 2-4.3 2.8-0.8 1.7-2.4 1.3-2.7-0.9-1.5 1.6-0.9 4.4-4.5 5.3 0.2 2.2-1.6 2.7 0.4 3.7-2.4 1-1.3 0.8-0.9-2.7-1.6 0.7-1-0.1-1 1.8-4.4 0-1.5-1-0.8 0.6-1.7-1.9 0.3-1.9-0.7-0.7-1.2 0.6 0.3-2.1 1.1-1.6-2.3-2.7-0.6-1.8-1.3-1.4-1.1-0.2-1.3 0.9-1.9 0.9-1.5 1.4-2.4-0.5-1.6-1.7-0.9-0.2-1.5 0.9-0.9 0-0.3-2.4 0.3-2-0.5-2.4-2-1.8-1.1-3.7-0.2-4 1.9-1.2 1-3.8 1.8-0.1 3.9 1.8 3.2-1.3 2.1 0.4 0.9-1.4 22.5-0.1 1.3-4.5-1-0.8-2.5-27.7-2.4-27.7 8.5-0.1 18.6 14 18.7 14 1.3 3 3.5 1.8 2.6 1.1 0.1 4.1 6.2-0.7z"
            id="ML"
            name="Mali"
            fill={visitedCountries.includes('ML') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1548.4 364.2l-4.1 4.2-0.8 2.3-3 1.5-2.8 2.8-3.9 0.3-1.5 6.9-2.2 1.2 3.5 5.6 4.1 4.7 2.9 4.3-1.4 5.5-1.8 1.2 1.8 3.2 4.3 5.1 1 3.6 0.2 3 2.7 5.9-2.6 6-2.2 6.6-0.9-4.8 1.3-4.9-2.2-3.8-0.2-7-2.6-3.4-2.7-7.6-2-8.1-3.1-5.4-3.2 3.3-5.8 4.5-3.3-0.5-3.6-1.5 0.9-8-2-6-5.3-7.4 0.3-2.3-3.4-0.9-4.6-5.2-1.1-5.2 2.1 1-0.6-4.6 2.5-1.5-1-2.7 1-2.2-0.9-6.7 4.6 1.5 1.6-5.3-0.3-3.1 2-5.4-0.9-3.7 6.2-4.4 4.2 1.1-1.4-3.9 1.7-1.2-1-2.4 3.1-0.5 2.7 3.8 2.7 1.5 1.3 4.9 0.9 5.3-4.2 5.4 0.7 7.6 5.6-1.1 2.4 5.9 3.7 1.3-0.8 5.3 4.5 2.4 2.6 1.2 3.8-1.9 0.5 2.7z"
            id="MM"
            name="Myanmar"
            fill={visitedCountries.includes('MM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1090.6 227.2l-0.8 1.4-1.4 0.6-0.4-1.2-1.9 3.1 0.5 2.1-1.1-0.5-1.7-2.1-2.3-1.3 0.5-1 0.4-3.5 1.6-1.5 0.9-0.6 1.4 1.1 0.9 0.9 1.7 0.7 2.1 1.3-0.4 0.5z"
            id="ME"
            name="Montenegro"
            fill={visitedCountries.includes('ME') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1496.2 181.5l4-1.2 5.7-0.8 5.4 0.9 6.6 2.9 4.9 3.2 4.6 0 6.8 1 3.6-1.6 5.9-1 4.4-4.4 3.4 0.7 3.9 2.1 5.6-0.6 0.6 4.7 0.3 6.3 2.8 2.5 2.3-0.8 5.5 1 2.5-2.3 5.2 2 7.2 4.4 0.8 2.2-4.4-0.7-6.8 0.8-2.5 1.8-1.3 4.2-6.4 2.4-3.2 3.4-5.9-1.3-3.2-0.6-0.5 4.1 2.9 2.4 1.9 2.1-2.4 2.2-2 3.4-4.9 2.2-7.6 0.2-7.2 2.2-4.4 3.4-3.3-1.9-6.2 0-9.4-3.9-5.6-0.9-6.4 0.9-11.3-1.5-5.6 0.2-4.7-3.8-5-5.8-3.4-0.7-8-4-7.2-0.8-6.5-1.1-3-2.8-1.4-7.3-5.8-5.1-8.2-2.3-5.7-3.3-3.3-4.4 4.7-1.1 6.7-5.3 5.9-2.9 5.3 1.9 5.2 0.1 4.8 2.9 5 0.2 8 1.6 2.4-4.4-4-3.6 1.3-6.4 7 2.5 4.8 0.8 6.7 1.6 3.6 4.6 8.5 2.6z"
            id="MN"
            name="Mongolia"
            fill={visitedCountries.includes('MN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1166.7 673.5l-4.1 0-0.3-2.9-0.6-2.9-0.4-2.3 1.4-7.1-1.1-4.6-2.2-9 6.2-7.3 1.7-4.6 0.8-0.6 0.9-3.8-0.8-1.9 0.4-4.8 1.3-4.4 0.4-8.2-2.8-2-2.7-0.5-1.1-1.6-2.6-1.3-4.7 0.1-0.2-2.4-0.4-4.6 17.2-5.3 3.2 3.1 1.5-0.6 2.2 1.6 0.2 2.6-1.3 3 0.2 4.5 3.5 4 1.9-4.5 2.5-1.3-0.1-8.3-2.2-4.6-1.9-2.1-0.4 0-0.6-7.3 1.5-6.1 2.2-0.2 6.7 1.8 1.5-0.8 3.9-0.2 2.1-1.9 3.4 0.1 6.2-2.5 4.6-3.7 0.9 2.8-0.5 6.4 0.5 5.7-0.2 10 0.8 3.1-1.9 4.6-2.4 4.5-3.7 4-5.3 2.4-6.5 3.1-6.6 6.9-2.2 1.2-4.2 4.6-2.3 1.4-0.8 4.6 2.4 4.9 0.9 3.7 0 2 1-0.4-0.5 6.3-1.1 3 1.2 1.1-1 2.7-2.4 2.3-4.7 2.1-6.9 3.5-2.5 2.4 0.3 2.7 1.3 0.4-0.7 3.4z"
            id="MZ"
            name="Mozambique"
            fill={visitedCountries.includes('MZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M959.2 341.5l-8.5 0.1 2.4 27.7 2.5 27.7 1 0.8-1.3 4.5-22.5 0.1-0.9 1.4-2.1-0.4-3.2 1.3-3.9-1.8-1.8 0.1-1 3.8-1.9 1.2-3.6-4.4-3.4-4.8-3.6-1.7-2.7-1.8-3.1 0-2.8 1.4-2.7-0.5-2 2-0.4-3.4 1.6-3.2 0.8-6-0.4-6.4-0.6-3.2 0.6-3.2-1.4-3-2.8-2.8 1.3-2.1 21.7 0-0.9-9.3 1.5-3.3 5.2-0.5 0.2-16.5 18 0.4 0.2-9.8 20.5 15.6z"
            id="MR"
            name="Mauritania"
            fill={visitedCountries.includes('MR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1182.3 588.9l0.4 0 1.9 2.1 2.2 4.6 0.1 8.3-2.5 1.3-1.9 4.5-3.5-4-0.2-4.5 1.3-3-0.2-2.6-2.2-1.6-1.5 0.6-3.2-3.1-2.9-1.6 2-6 1.8-2.2-0.9-5.4 1.3-5.2 1-1.7-1.3-5.4-2.6-2.9 5.5 1.2 1 1.7-0.1 0.8 1.8 4.1 0.2 7.7-1.8 3.6 1.6 4.7-0.2 2.8 1.2 1.9-0.1 2.4 0.9 1.4 1-1.6 1.9 2.5 0.2-0.8-1-3.4-1.1-0.3-0.1-0.9z"
            id="MW"
            name="Malawi"
            fill={visitedCountries.includes('MW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1564.3 461.9 1565.7 462.5 1569.2 466.4 1571.7 470.7 1572.3 475 1571.8 477.9 1572.4 480.1 1572.9 483.9 1575 485.7 1577.3 491.4 1577.3 493.5 1573.3 494 1567.8 489.2 1561 484.1 1560.2 480.8 1556.8 476.5 1555.8 471.2 1553.6 467.7 1554 463 1552.6 460.3 1553.5 459.2 1558.3 462 1558.9 465.3 1562.6 464.5 1564.3 461.9 Z"
            id="MY"
            name="Malaysia"
            fill={visitedCountries.includes('MY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1654.1 475.3 1649.1 474.2 1642.6 474.2 1640.9 481.5 1638.8 483.7 1636.2 492.6 1631.6 494 1626.2 492.2 1623.5 492.8 1620.2 496 1616.6 495.6 1612.9 496.9 1609 493.2 1608 488.9 1612.2 491.1 1616.5 489.9 1617.5 484.5 1619.9 483.3 1626.7 481.9 1630.5 476.8 1633.1 472.8 1635.9 476.1 1637 473.9 1639.7 474.1 1639.8 470 1639.9 466.8 1644 462.4 1646.6 457.4 1648.9 457.3 1652 460.6 1652.4 463.4 1656.2 465.2 1661 467.1 1660.8 469.6 1657 469.9 1658.1 473.1 1654.1 475.3 Z"
            id="MY"
            name="Malaysia"
            fill={visitedCountries.includes('MY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1116.2 614.3l4.6-1.4 3.6 0.3 2.2 1.5 0 0.5-3.2 1.5-1.7 0-3.7 2.5-2-2.7-8.7 2.3-4.2 0.2-0.8 22.9-5.5 0.2-0.6 18.7-1.1 23.7-5 3.3-2.9 0.5-3.4-1.2-2.5-0.5-0.8-2.7-2-1.8-2.8 3.2-3.9-4.9-2-4.6-1-6.3-1.2-4.6-1.6-9.9 0.1-7.7-0.6-3.5-2.1-2.7-2.8-5.3-2.8-7.7-1.1-4-4.4-6.3-0.3-4.9 2.7-1.2 3.4-1.1 3.6 0.2 3.3 2.9 0.8-0.5 22.7-0.2 3.8 3 13.5 0.9 10.4-2.6z"
            id="NA"
            name="Namibia"
            fill={visitedCountries.includes('NA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1068.6 355l1.6 10 2.2 1.7 0.1 2 2.4 2.2-1.2 2.8-1.8 13-0.2 8.4-7 6-2.3 8.5 2.4 2.4 0 4.1 3.7 0.1-0.6 3.1-1.5 0.3-0.2 2.1-1 0.1-3.9-7-1.4-0.3-4.3 3.6-4.4-1.9-3-0.3-1.6 0.9-3.3-0.2-3.3 2.7-2.9 0.2-6.8-3.3-2.7 1.5-2.9-0.1-2.1-2.4-5.6-2.4-6.1 0.8-1.4 1.3-0.8 3.7-1.6 2.6-0.4 5.8-4.3-3.7-2 0-1.9 1.9 0.1-4.4-6.5-1.5-0.2-3.1-3.1-4.2-0.8-2.9 0.5-3.1 3.6-0.3 2-2.3 7.7-0.5 5-1 0.4-4 3.1-4.3-0.1-14.8 7.8-2.8 16-12.6 18.8-12.3 8.8 2.8 3.2 3.5 3.8-2.4z"
            id="NE"
            name="Niger"
            fill={visitedCountries.includes('NE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1066.2 421.7l2.3 2.5-0.6 1.2-0.3 2.1-4.7 5-1.4 4.1-0.8 3.3-1.2 1.5-1.1 4.5-3 2.6-0.8 3.2-1.3 2.6-0.5 2.7-3.9 2.2-3.2-2.7-2.1 0.1-3.4 3.8-1.6 0-2.7 6.2-1.4 4.6-5.9 2.3-2.1-0.3-2.2 1.4-4.5-0.1-3.1-4.1-1.9-4.6-4-4.2-4.2 0-5 0 0.3-10.3-0.2-4.1 1.1-4 1.7-2 2.8-4-0.6-1.7 1.1-2.6-1.3-3.8 0.2-2.1 0.4-5.8 1.6-2.6 0.8-3.7 1.4-1.3 6.1-0.8 5.6 2.4 2.1 2.4 2.9 0.1 2.7-1.5 6.8 3.3 2.9-0.2 3.3-2.7 3.3 0.2 1.6-0.9 3 0.3 4.4 1.9 4.3-3.6 1.4 0.3 3.9 7 1-0.1z"
            id="NG"
            name="Nigeria"
            fill={visitedCountries.includes('NG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M519.6 405.5l-0.5 0.7-0.5 1.4 0.4 2.3-1.5 2.2-0.8 2.6-0.5 2.8 0.2 1.7-0.1 2.9-0.9 0.6-0.7 2.8 0.2 1.7-1.2 1.6 0.1 1.7 0.8 1.1-1.4 1.4-1.7-0.5-0.8-1.3-1.8-0.5-1.3 0.8-3.6-1.7-0.9 0.8-1.8-2-2.5-2.6-1.1-2.1-2.2-2.1-2.5-2.9 0.7-1 0.8 1 0.5-0.4 1.8-0.3 0.8-1.5 0.8 0 0.2-3.2 1.3-0.1 1.2 0 1.4-1.7 1.5 1.3 0.6-0.8 1.2-0.8 2.1-1.7 0.2-1.4 0.5 0.1 0.9-1.5 0.6-0.2 0.9 1 1.1 0.2 1.3-0.8 1.4 0 2-0.8 0.9-0.9 1.9 0.1z"
            id="NI"
            name="Nicaragua"
            fill={visitedCountries.includes('NI') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1113.7 67.5 1107.3 69.6 1104.1 70.1 1104.9 66.3 1099.1 64.2 1093.2 66 1092.1 70 1088.7 72.4 1084 71.1 1078.7 71.3 1073.6 68.5 1071.4 69.9 1068.8 70.1 1068.9 73.7 1060.9 72.8 1060.3 75.9 1056.3 75.9 1054 79.8 1050.6 85.9 1044.9 93.8 1046.7 95.8 1045.4 98 1041.1 97.9 1038.7 103.3 1039.7 111 1042.8 113.9 1042 120.8 1038.6 124.8 1036.8 128.2 1033.5 124.6 1024.9 131.4 1018.8 132.8 1012.3 129.8 1010.5 123.5 1008.5 110 1012.5 106.3 1023.8 101.4 1031.9 95.5 1039.1 87.7 1048 77 1054.4 72.9 1064.7 66.1 1073.2 63.7 1079.9 64 1085.1 59.6 1092.5 59.8 1099.5 58.8 1113.2 62.7 1108.3 64.1 1113.7 67.5 Z"
            name="Norway"
            id="NO"
            fill={visitedCountries.includes('NO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1076.6 25.2 1069 27.1 1062.2 26 1064.4 24.8 1061.8 23.3 1069.1 22.4 1071 24.1 1076.6 25.2 Z"
            name="Norway"
            id="NO"
            fill={visitedCountries.includes('NO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1051 16.7 1063.6 20.1 1055 21.9 1053.8 25.3 1050.8 26.2 1049.9 30.2 1045.5 30.4 1037 27.5 1040 25.8 1034.3 24.4 1026.6 20.5 1023.4 17 1032.7 15.4 1035 16.9 1040 16.9 1041 15.4 1046.2 15.2 1051 16.7 Z"
            name="Norway"
            id="NO"
            fill={visitedCountries.includes('NO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1075.4 13.7 1082.8 15.2 1078.4 17.6 1068.3 18.1 1057.6 17.3 1056.6 16.1 1051.5 16.1 1047.2 14.1 1057.7 12.9 1063.1 13.9 1066.2 12.6 1075.4 13.7 Z"
            name="Norway"
            id="NO"
            fill={visitedCountries.includes('NO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1469 322.9l0.2 2.7 1.5 4.1-0.1 2.5-4.6 0.1-6.9-1.5-4.3-0.6-3.8-3.2-7.7-0.9-7.8-3.6-5.8-3.1-5.8-2.4 0.9-6 2.8-3 1.9-1.5 4.8 2 6.4 4.2 3.3 0.9 2.5 3.1 4.5 1.2 5 2.9 6.5 1.4 6.5 0.7z"
            id="NP"
            name="Nepal"
            fill={visitedCountries.includes('NP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1283.8 394.9 1281.6 390.4 1276.4 379.8 1292.7 373.4 1295.3 360.6 1292.3 356 1292.3 353.4 1293.6 350.8 1293.4 348.2 1295.8 346.9 1294.7 346 1294.7 341.8 1297.5 341.8 1300.5 346.2 1303.8 348.5 1307.9 349.4 1311.3 350.5 1314.2 354.2 1315.9 356.3 1317.9 357.2 1318.1 358.6 1316.4 362.4 1315.7 364.2 1313.5 366.3 1311.8 370.7 1309.3 370.3 1308.3 371.9 1307.6 375.1 1308.7 379.4 1308.2 380.2 1305.7 380.2 1302.4 382.6 1302.1 385.7 1300.9 387.1 1297.4 387 1295.4 388.6 1295.6 391.2 1293 393 1289.9 392.4 1286.3 394.6 1283.8 394.9 Z"
            id="OM"
            name="Oman"
            fill={visitedCountries.includes('OM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1296.2 336.7 1294.9 334.5 1296.3 332.4 1297 332.9 1296.8 335.6 1296.2 336.7 Z"
            id="OM"
            name="Oman"
            fill={visitedCountries.includes('OM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1401.6 273.9l-3.8 5.4-5.7 1-8.5-1.6-2 2.8 3.3 5.6 2.9 4.4 5.1 3.1-3.8 3.7 1 4.6-3.9 6.5-2.2 6.5-4.5 6.7-6.5-0.5-4.9 6.8 4 2.8 1.4 5 3.5 3.2 1.8 5.5-12.1 0-3.2 4.3-4.2-1.6-2.2-4.6-4.9-4.9-10 1.2-9 0.1-7.6 0.9 1.1-7.4 7.5-3.4-0.9-2.9-2.7-1.1-1-5.6-5.7-2.8-2.8-3.9-3.2-3.4 9.6 3.3 5.3-1 3.4 0.8 0.9-1.4 3.9 0.6 6.6-2.7-0.8-5.4 2.3-3.7 4.1 0 0.2-1.7 4-0.9 2.1 0.6 1.8-1.8-1.1-3.9 1.4-3.8 3.1-1.7-3.1-4.2 5.2 0.2 0.9-2.3-0.8-2.5 2-2.7-1.4-3.2-1.9-2.7 2.4-2.8 5.3-1.3 5.9-0.8 2.4-1.1 2.9-0.8 4.7 3 2.9 5 9.5 2.5z"
            id="PK"
            name="Pakistan"
            fill={visitedCountries.includes('PK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M549.3 446.2l-0.7 0.9 1.1 3.8-1.1 1.9-1.8-0.5-0.9 3.1-1.8-1.8-1-3.5 1.4-1.7-1.4-0.4-0.9-2.1-2.8-1.8-2.4 0.4-1.3 2.2-2.4 1.6-1.2 0.2-0.6 1.4 2.5 3.5-1.6 0.8-0.8 0.9-2.7 0.4-0.8-3.9-0.8 1.1-1.8-0.4-1-2.5-2.3-0.5-1.5-0.7-2.4 0-0.2 1.4-0.6-1 0.3-1.3 0.6-1.3-0.2-1.1 0.9-0.8-1.1-0.9 0.1-2.6 2.2-0.6 1.9 2.3-0.2 1.4 2.2 0.3 0.6-0.6 1.5 1.6 2.8-0.5 2.5-1.6 3.5-1.3 2-1.9 3.1 0.4-0.2 0.6 3.1 0.2 2.4 1.2 1.8 1.9 2 1.8z"
            id="PA"
            name="Panama"
            fill={visitedCountries.includes('PA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M590.5 529.4l-5.1-0.3-0.8 1-4.6 1.2-6.3 4.4-0.3 3-1.4 2.2 0.7 3.5-3.4 1.8 0.2 2.8-1.5 1.1 2.6 5.8 3.3 3.9-1 2.8 3.8 0.3 2.3 3.5 5 0.1 4.4-3.7 0.1 9.7 2.6 0.7 3.2-1.1 5.5 10.4-1.1 2.1 0 4.6 0.3 5.4-1.9 3.2 1.2 2.4-1.1 2.2 2.9 5.4-2.9 6.9-1.1 3.3-2.8 1.6-5.9-3.7-0.8-2.6-11.7-6.4-10.7-7.1-4.7-3.9-2.8-5.3 0.8-1.9-5.4-8.4-6.4-11.8-6-12.8-2.4-3-2-4.7-4.6-4.2-4.1-2.6 1.7-2.8-3-6.2 1.7-4.5 4.4-4 0.7 2.7-1.6 1.5 0.3 2.3 2.3-0.5 2.3 0.7 2.5 3.3 3.1-2.7 0.9-4.3 3.4-5.6 6.7-2.5 6.1-6.8 1.7-4.1-0.8-4.9 1.5-0.6 3.8 3 1.8 3.1 2.6 1.6 3.5 6.7 4.2 0.9 3.1-1.7 2.1 1.1 3.4-0.6 4.4 3-3.5 6.6 1.7 0.1 2.9 3.4z"
            id="PE"
            name="Peru"
            fill={visitedCountries.includes('PE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1700.5 447.8 1701.4 452.1 1702 455.7 1700.4 461.5 1697.9 455 1695.5 458.3 1697.6 463 1696.2 466 1689.3 462.3 1687.4 457.6 1688.9 454.6 1685.1 451.5 1683.5 454.2 1680.9 453.9 1676.9 457.5 1675.9 455.6 1677.7 450.2 1681.1 448.4 1684 446 1686.2 448.9 1690.4 447.2 1691.1 444.3 1695.1 444.1 1694.3 439.2 1699.2 442.2 1699.9 445.4 1700.5 447.8 Z"
            id="PH"
            name="Philippines"
            fill={visitedCountries.includes('PH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1685.9 435.8 1684.1 437.9 1682.7 442 1681.1 443.9 1677.2 439.5 1678.2 437.7 1679.5 435.9 1679.7 432 1682.8 431.6 1682.3 435.9 1685.9 429.7 1685.9 435.8 Z"
            id="PH"
            name="Philippines"
            fill={visitedCountries.includes('PH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1655.6 442 1648.5 448.1 1650.9 443.6 1654.7 439.6 1657.7 435.2 1660 428.8 1661.6 434.1 1658.1 437.6 1655.6 442 Z"
            id="PH"
            name="Philippines"
            fill={visitedCountries.includes('PH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1673.1 425.5 1676.7 427.5 1680.2 427.5 1680.4 430.1 1678.1 432.9 1674.7 434.8 1674.2 431.8 1674.3 428.5 1673.1 425.5 Z"
            id="PH"
            name="Philippines"
            fill={visitedCountries.includes('PH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1693.2 423.7 1695.6 430.9 1691.1 429.2 1691.4 431.4 1693.2 435.3 1690.6 436.8 1690 432.2 1688.2 431.9 1687 428 1690.3 428.5 1690 426.1 1686 421.2 1691.4 421.3 1693.2 423.7 Z"
            id="PH"
            name="Philippines"
            fill={visitedCountries.includes('PH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1670.2 417.9 1669.3 423.5 1666.6 420.3 1663.1 415.4 1667.9 415.6 1670.2 417.9 Z"
            id="PH"
            name="Philippines"
            fill={visitedCountries.includes('PH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1663.7 383 1667.5 384.9 1668.9 383.2 1669.7 384.8 1669.3 387.5 1671.9 392.1 1671.3 397.4 1668.4 399.5 1668.3 404.7 1670.3 409.8 1673.3 410.5 1675.7 409.8 1683.2 413.3 1683.1 416.8 1685.2 418.4 1684.9 421.3 1680.2 418.2 1677.7 414.8 1676.5 417.2 1672.5 413.3 1667.5 414.3 1664.5 412.9 1664.4 410.2 1666 408.6 1664.1 407.1 1663.7 409.4 1660.4 405.7 1659.1 402.9 1658 396.8 1660.6 398.9 1659.5 388.8 1660.3 383 1663.7 383 Z"
            id="PH"
            name="Philippines"
            fill={visitedCountries.includes('PH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1868.1 545.6 1866.5 546.3 1864.2 543.8 1862 539.7 1861.2 534.8 1862 534.2 1862.5 536.1 1864.1 537.6 1866.5 541.6 1869 543.8 1868.1 545.6 Z"
            id="PG"
            name="Papua New Guinea"
            fill={visitedCountries.includes('PG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1846.7 537 1843.7 537.5 1842.7 539.3 1839.5 540.9 1836.5 542.4 1833.4 542.4 1828.9 540.5 1825.8 538.7 1826.4 536.7 1831.4 537.7 1834.6 537.2 1835.6 534.1 1836.5 533.9 1836.8 537.3 1840 536.9 1841.8 534.7 1845.1 532.4 1844.7 528.6 1848.1 528.5 1849.2 529.5 1848.8 533.1 1846.7 537 Z"
            id="PG"
            name="Papua New Guinea"
            fill={visitedCountries.includes('PG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1782.9 560.4 1784.5 539.4 1785.5 518.5 1795.1 522.9 1805.4 526.6 1809.1 529.9 1812.1 533.1 1812.7 536.9 1821.9 540.9 1823 544.3 1817.8 545 1818.7 549.3 1823.4 553.5 1826.4 560.3 1829.7 560.1 1829.1 562.9 1833.4 564 1831.6 565.2 1837.3 567.9 1836.4 569.8 1832.6 570.2 1831.4 568.6 1826.7 567.8 1821.1 566.9 1817.1 562.8 1814.3 559.2 1811.8 553.6 1804.7 550.8 1799.8 552.6 1796.1 554.8 1796.4 559.5 1791.8 561.7 1788.7 560.6 1782.9 560.4 Z"
            id="PG"
            name="Papua New Guinea"
            fill={visitedCountries.includes('PG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1853.6 530.7 1851.8 532.4 1850.9 528.6 1849.8 526.2 1847.3 524.1 1844.2 521.3 1840.2 519.4 1841.8 517.9 1844.8 519.7 1846.7 521.1 1849 522.6 1851.1 525.3 1853.2 527.4 1853.6 530.7 Z"
            id="PG"
            name="Papua New Guinea"
            fill={visitedCountries.includes('PG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1079.9 154.8l5.9 0.7 8.8-0.1 2.5 0.7 1.4 1.9 0.6 2.7 1.7 2.3 0.4 2.4-2.8 1.3 1.9 2.8 0.5 2.8 3.2 5.4-0.3 1.7-2.3 0.7-3.8 5.2 1.6 2.8-1.1-0.4-5-2.4-3.5 0.9-2.4-0.6-2.8 1.3-2.7-2.2-1.9 0.9-0.3-0.4-2.6-3.1-3.7-0.3-0.7-2-3.4-0.7-0.6 1.6-2.8-1.3 0.2-1.7-3.7-0.5-2.5-2-2.4-3.9 0.2-2.2-1.5-3.3-1.9-2.1 1.2-1.7-1.4-3.1 3.1-1.8 7.1-2.8 5.8-2 4.8 1 0.6 1.5 4.6 0z"
            id="PL"
            name="Poland"
            fill={visitedCountries.includes('PL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onTouchStart={(e) => handleCountryLabel(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1660.3 229.9l1.4 1.1-2.2-0.4-1 2.2-0.3 2.1 2.8 4.6-1.9 1.4-0.3 1.1-0.9 1.9-2.9 1.1-1.4 1.7 1.3 2.7-0.3 0.7 2.6 1.1 4.4 2.8 0 1.5-2 0.4-3.6 0.4-0.6 2.8-2.5-0.2 0 0.6-3.2-1.2-0.1 1.2-1.3 0.5-0.7-1.2-1.7-0.6-1.9-1 0.1-2.8 0.9-0.8-1-1.1-0.4-3.5-0.9-1-3.4-0.7-3.4-1.7 2.1-4.1 3.9-3.4 1.1-4.6 3.6 2 4.6 0.3-2.8-3.4 6.4-2.7 0-3.6 5.5 3.8z"
            id="KP"
            name="Dem. Rep. Korea"
            fill={visitedCountries.includes('KP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M662.5 631.4l2 3.5 0.4 8.7 5.9 1.3 2.2-1.3 3.9 1.8 1.2 1.9 1.1 5.9 0.8 2.4 2.1 0.3 2-1 2.1 1.1 0.3 3.6-0.3 3.8-0.7 3.7-0.3 5.6-4.3 5-4.2 1-6.3-1-5.8-1.7 4.2-9.8-1.1-2.8-5.9-2.5-7.3-4.8-4.6-1-11.3-10.4 1.5-7.7-0.2-3.5 2.1-5.6 9.6-1.9 5.2 0.1 5.4 3.3 0.3 2z"
            id="PY"
            name="Paraguay"
            fill={visitedCountries.includes('PY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z"
            id="PS"
            name="Palestine"
            fill={visitedCountries.includes('PS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1270.1 343.7l-1.5 0.5-1.8-1.3-0.8-4.7 1.1-3.3 1.5-0.7 1.8 2 0.5 3.7-0.8 3.8z"
            id="QA"
            name="Qatar"
            fill={visitedCountries.includes('QA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1118.9 193.1l1.6 0.7 1.8 1.8 2 2.6 3.4 3.8 0.6 2.7-0.2 2.7 1.3 2.9 2.4 1.2 2.3-1.1 2.4 1.1 0.4 1.7-2.3 1.3-1.6-0.6-0.4 7.7-3.1-0.7-4-2.3-5.9 1.5-2.3 1.6-7.6-0.4-4-0.9-1.9 0.4-1.8-2.6-1-1.1 1-1.1-1.3-0.7-1.5 1.4-3.1-1.9-0.7-2.6-3.2-1.4-0.8-2.1-3-2.4 3.9-1.2 2.6-4.3 1.9-4.2 2.9-1.3 2-1.4 3.2 0.7 3.2 0 2.5 1.6 1.6-1 3.6-0.6 1-1.5 2.1 0z"
            id="RO"
            name="Romania"
            fill={visitedCountries.includes('RO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1158.8 509.1l2.2 3.6-0.3 3.8-1.6 0.8-3.1-0.4-1.7 3.7-3.5-0.5 0.6-3.6 0.8-0.5 0.2-3.8 1.6-1.8 1.4 0.7 3.4-2z"
            id="RW"
            name="Rwanda"
            fill={visitedCountries.includes('RW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M938.9 324.3l-0.1 0.4-0.1 1.2-0.2 9.8-18-0.4-0.2 16.5-5.2 0.5-1.5 3.3 0.9 9.3-21.7 0-1.3 2.1 0.3-2.7 0.1 0 12.5-0.5 0.7-2.3 2.4-2.9 2-8.9 7.9-6.9 2.7-8.1 1.8-0.5 1.9-5 4.6-0.7 2 0.9 2.5 0 1.8-1.5 3.4-0.2-0.1-3.4 0.9 0z"
            id="EH"
            name="Western Sahara"
            fill={visitedCountries.includes('EH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1240.5 315l5 0.6 1.7 3.1 3.9-0.2 2.7 5.6 2.9 1.4 1.2 2.3 4 2.7 0.7 2.6-0.4 2.2 0.9 2.1 1.8 1.8 0.9 2.1 1 1.6 1.8 1.3 1.5-0.5 1.3 2.5 0.3 1.4 2.7 6.6 16.9 3.2 1-1.4 3 4.6-2.6 12.8-16.3 6.4-15.9 2.5-5 2.9-3.5 6.7-2.6 1.1-1.5-2.1-2.1 0.3-5.5-0.7-1.1-0.6-6.4 0.1-1.5 0.6-2.4-1.6-1.3 3.1 0.8 2.7-2.4 2.1-0.9-2.8-1.8-1.9-0.5-2.6-3.1-2.3-3.3-5.4-1.9-5.2-4.1-4.4-2.5-1.1-4.1-6.1-0.9-4.4 0-3.8-3.6-7.2-2.8-2.5-3-1.3-2.1-3.7 0.2-1.4-1.8-3.4-1.7-1.4-2.5-4.8-3.8-5.1-3.1-4.4-2.7 0 0.5-3.5 0.1-2.3 0.4-2.6 6.2 1.1 2.1-2 1.1-2.3 4.1-0.9 0.7-2.2 1.6-1-6-6.5 10.4-3.2 0.9-1 6.8 1.8 8.6 4.5 16.8 12.9 10.2 0.5z"
            id="SA"
            name="Saudi Arabia"
            fill={visitedCountries.includes('SA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1191 409.2l-0.7 5.5-2 6.4-3.3 3.1-2.3 5-0.5 2.6-2.6 1.8-1.5 6.7 0 0.8-0.8-0.2 0.1-3.2-0.8-2.2-2.9-2.5-0.9-4.6 0.6-4.8-2.6-0.4-0.4 1.4-3.4 0.4 1.5 1.8 0.5 3.9-3 3.5-2.7 4.6-2.9 0.7-4.8-3.7-2.1 1.3-0.5 1.8-2.9 1.3-0.2 1.3-5.6 0-0.8-1.3-4.1-0.3-2 1.1-1.6-0.5-2.9-3.8-1-1.7-4.1 0.9-1.5 2.9-1.3 5.8-2 1.2-1.7 0.7-0.5-0.3-1.9-1.9-0.4-2 0.8-2.6 0-2.7-3.3-4-0.7-2.7 0-1.6-2.1-1.9-0.1-3.7-1.3-2.5-1.9 0.4 0.5-2.4 1.4-2.6-0.7-2.7 1.8-2-1.2-1.5 1.3-3.9 2.5-4.8 4.8 0.5-1.1-25.5 0-2.7 6.4 0-0.5-12.8 22.3 0 21.5 0 22.1 0 2.1 6.3-1.2 1.1 1.2 6.7 2.5 7.6 2.2 1.6 3.2 2.4-2.7 3.6-4 1.1-1.7 2-0.3 4.2-2 9.5 0.7 2.5z"
            id="SD"
            name="Sudan"
            fill={visitedCountries.includes('SD') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1178.1 441.1l0.2 5-0.8 1.9-3 0.2-1.9 3.6 3.5 0.5 3 3.1 1 2.6 2.6 1.5 3.5 7-3.8 4.2-3.4 3.8-3.5 3-4 0-4.5 1.5-3.6-1.5-2.3 1.8-5.1-4.3-1.4-2.7-3.1 1.3-2.6-0.4-1.5 1.1-2.6-0.8-3.5-5.3-0.9-2-4.3-2.6-1.4-3.8-2.4-2.8-3.9-3.3-0.1-2.1-3.1-2.6-3.9-2.5 1.7-0.7 2-1.2 1.3-5.8 1.5-2.9 4.1-0.9 1 1.7 2.9 3.8 1.6 0.5 2-1.1 4.1 0.3 0.8 1.3 5.6 0 0.2-1.3 2.9-1.3 0.5-1.8 2.1-1.3 4.8 3.7 2.9-0.7 2.7-4.6 3-3.5-0.5-3.9-1.5-1.8 3.4-0.4 0.4-1.4 2.6 0.4-0.6 4.8 0.9 4.6 2.9 2.5 0.8 2.2-0.1 3.2 0.8 0.2z"
            id="SS"
            name="South Sudan"
            fill={visitedCountries.includes('SS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M918 408l0.2 4 1.1 3.7 2 1.8 0.5 2.4-0.3 2-0.8 0.4-3.1-0.5-0.4 0.7-1.2 0.1-4.1-1.5-2.7-0.1-10.4-0.3-1.5 0.8-1.9-0.2-3 1-0.8-4.9 5.1 0.1 1.4-0.9 1 0 2.1-1.5 2.4 1.3 2.4 0.2 2.5-1.5-1.1-1.8-1.9 1-1.7 0-2.2-1.6-1.8 0.1-1.3 1.6-6.1 0.1-2.3-5-2.7-2.2 2.5-1.3 2.8-4.5 1.4-3.3 2-2 2.7 0.5 2.8-1.4 3.1 0 2.7 1.8 3.6 1.7 3.4 4.8 3.6 4.4z"
            id="SN"
            name="Senegal"
            fill={visitedCountries.includes('SN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M928.5 447.9l-2.6 3-2.6 3.4-0.3 1.9-1.4 2.1-1.5-0.5-4-2.6-3-3.4-0.9-2.4-0.7-4.7 3.1-2.9 0.6-1.7 1-1.4 1.6-0.2 1.3-1.2 4.5 0 1.6 2.3 1.2 2.7-0.2 1.9 0.9 1.7-0.1 2.3 1.5-0.3z"
            id="SL"
            name="Sierra Leone"
            fill={visitedCountries.includes('SL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M492.5 415.9l-0.7 1.5-3.3-0.1-2-0.6-2.2-1.3-3-0.4-1.5-1.4 0.3-0.9 2-1.6 1.2-0.7-0.3-0.8 1.4-0.4 1.6 0.6 1.1 1.2 1.6 1.1 0.1 0.8 2.5-0.7 1.2 0.4 0.7 0.7-0.7 2.6z"
            id="SV"
            name="El Salvador"
            fill={visitedCountries.includes('SV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1102 218.2l-1.1 1.4 0.7 2.4 2.8 2.7-1.8 2-0.6 2 0.6 0.8-0.7 0.8-2.4 0.2-1.7 0.3-0.3-0.5 0.6-0.7 0.4-1.6-0.7 0.1-1.1-1.2-0.9-0.3-0.8-1-1-0.4-0.8-0.9-0.9 0.4-0.5 2.1-1.2 0.4 0.4-0.5-2.1-1.3-1.7-0.7-0.9-0.9-1.4-1.1 1.1-0.3 0.5-2.9-2.7-2.5 1.1-2.8-1.9 0.1 1.7-2.4-1.7-1.8-1.5-2.5 3.7-1.6 3.2 0.3 3 2.4 0.8 2.1 3.2 1.4 0.7 2.6 3.1 1.9 1.5-1.4 1.3 0.7-1 1.1 1 1.1z"
            id="RS"
            name="Serbia"
            fill={visitedCountries.includes('RS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M681 464.9l-3.1 5.5 0.3 4.4 2.2 3.8-1.1 2.7-0.5 3-1.5 2.7-3.2-1.4-2.7 0.7-2.3-0.6-0.6 1.9 1 1.2-0.6 1.4-3.1-0.6-3.3-5.6-0.7-3.6-1.8 0-2.4-4.6 1.1-3.4-0.3-1.5 3.5-1.6 1-5.8 6.8 1.3 0.6-1.2 4.6-0.5 6.1 1.8z"
            id="SR"
            name="Suriname"
            fill={visitedCountries.includes('SR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1098.1 187.7l-1.2 1.7-0.7 2.5-1 0.6-5.5-1.9-1.6 0.4-1 1.5-2.3 0.8-0.6-0.4-2.3 0.9-1.9 0.2-0.3 1.3-4.1 0.7-1.9-0.6-2.7-1.7-0.7-2.1 0.3-0.8 0.6-1.4 2.2 0.1 1.6-0.6 0.1-0.6 0.9-0.3 0.2-1.4 1.1-0.3 0.7-1.1 1.5 0 0.3 0.4 1.9-0.9 2.7 2.2 2.8-1.3 2.4 0.6 3.5-0.9 5 2.4z"
            id="SK"
            name="Slovakia"
            fill={visitedCountries.includes('SK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1069.8 203.9l-3.9 1.7-0.3 2.5-1.7 0.7 0.1 1.7-2-0.1-1.8-1-0.8 1-3.6-0.2 1.1-0.5-1.4-2.7 0.4-3.1 4.2 0.5 2.4-1.5 4.4-0.1 0.9-1.1 0.8 0.1 1.2 2.1z"
            id="SI"
            name="Slovenia"
            fill={visitedCountries.includes('SI') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1088.2 87l-7 1.6-3.5 3.9 1.3 3.5-6.2 4.5-7.8 5-2.1 8.1 3.7 4.1 4.8 3.3-3.3 6.6-4.6 1.4-0.6 10-2.1 5.7-5.7-0.6-2.2 4.8-5.5 0.3-1.9-5.7-4.5-6.9-4.2-8.4 1.8-3.4 3.4-4 0.8-6.9-3.1-2.9-1-7.7 2.4-5.4 4.3 0.1 1.3-2.2-1.8-2 5.7-7.9 3.4-6.1 2.3-3.9 4 0 0.6-3.1 8 0.9-0.1-3.6 2.6-0.2 6 2.7 7.2 3.7 1.8 8.5 1.8 2.2z"
            id="SE"
            name="Sweden"
            fill={visitedCountries.includes('SE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1161.7 667.7l0.6 2.9 0.3 2.9-1.4 2.8-3.2 0.7-3.1-3.5 0.1-2.2 1.7-2.4 0.6-1.9 1.7-0.4 2.7 1.1z"
            id="SZ"
            name="Swaziland"
            fill={visitedCountries.includes('SZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1195 287.5l-9.7 6.9-6.3-2.6-0.1 0 0.6-1-0.4-2.6 0.9-3.5 2.7-2.5-1.2-2.5-2.5-0.3-1.1-4.9 1-2.7 1.3-1.4 1.2-1.4-0.2-3.5 1.9 1.2 5.6-1.8 3 1.2 4.4 0 5.7-2.4 2.9 0.1 5.9-1-2.1 4-2.7 1.6 1.2 4.7-1 7.7-11 6.7z"
            id="SY"
            name="Syria"
            fill={visitedCountries.includes('SY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1119.2 376.1l1.1 25.5-4.8-0.5-2.5 4.8-1.3 3.9 1.2 1.5-1.8 2 0.7 2.7-1.4 2.6-0.5 2.4 1.9-0.4 1.3 2.5 0.1 3.7 2.1 1.9 0 1.6-3.6 1.1-2.8 2.6-4 7-5.2 3-5.5-0.4-1.6 0.6 0.6 2.2-2.9 2.3-2.4 2.5-7.1 2.4-1.4-1.4-1-0.2-1 1.7-4.6 0.5 0.8-1.8-1.8-4.4-0.8-2.6-2.5-1.1-3.4-3.8 1.2-3 2.6 0.6 1.6-0.4 3.2 0-3.2-5.8 0.2-4.3-0.5-4.2-2.3-4.1 0.6-3.1-3.7-0.1 0-4.1-2.4-2.4 2.3-8.5 7-6 0.2-8.4 1.8-13 1.2-2.8-2.4-2.2-0.1-2-2.2-1.7-1.6-10 5.5-3.5 22.5 12.3 22.6 12.3z"
            id="TD"
            name="Chad"
            fill={visitedCountries.includes('TD') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M991.4 431.2l-0.7 3.4 1.7 1.9 2 2.2 0.2 3.2 1.2 1.3-0.3 14.8 1.4 4.4-4.5 1.4-1.3-2.3-1.5-4.1-0.5-3.2 1.3-5.7-1.4-2.4-0.6-5 0-4.7-2.3-3.3 0.4-2 4.9 0.1z"
            id="TG"
            name="Togo"
            fill={visitedCountries.includes('TG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1577.5 410.2l-5.3-0.9-7.1 1.2-3.1 5.3 2.1 7.8-5.3-3-4.8 0.2 0.3-5.1-4.9 0 0.2 7.1-2.2 9.4-1.4 5.7 0.7 4.6 3.7 0.2 2.7 5.9 1.3 5.5 3.4 3.7 3.4 0.7 3.1 3.4-1.7 2.6-3.7 0.8-0.6-3.3-4.8-2.8-0.9 1.1-2.3-2.4-1.2-3.2-3.2-3.6-2.9-3.1-0.7 3.8-1.3-3.6 0.4-4 1.2-6.1 2.2-6.6 2.6-6-2.7-5.9-0.2-3-1-3.6-4.3-5.1-1.8-3.2 1.8-1.2 1.4-5.5-2.9-4.3-4.1-4.7-3.5-5.6 2.2-1.2 1.5-6.9 3.9-0.3 2.8-2.8 3-1.5 2.7 2 0.9 3.9 3.8 0.3-0.4 6.7 1 5.8 5.3-3.8 1.9 1.1 3.2-0.2 0.8-2.2 4.3 0.4 5 5.2 1.3 6.4 5.3 5.6 0.4 5.4-1.5 2.9z"
            id="TH"
            name="Thailand"
            fill={visitedCountries.includes('TH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1357 243.6l-1.4 1.9-6-1 0.6 3.6 5.5-0.5 7.1 2.1 9.6-1 3.1 6 1.5-0.7 3.7 1.5 0.5 2.5 1.8 3.6-5.4 0-3.8-0.5-2.5 2.9-2.2 0.6-1.5 1.4-2.7-2.1-0.9-5.4-1.7-0.3 0.1-2-3.3-1.4-1.7 2.2 0.2 2.6-0.6 0.9-3.2-0.1-0.9 2.9-2.1-1.2-3.4 2-1.8-0.7 1.3-6.5-2.4-4.8-4.2-1.5 0.6-2.8 4.4 0.3 1.5-3.5 0.5-4.1 6.5-1.5-0.2 3 1.3 1.7 2.1-0.1z"
            id="TJ"
            name="Tajikistan"
            fill={visitedCountries.includes('TJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1338.3 262l-1.6-0.2-2.9-1.7-0.3 2.2-4.2 1.3 0.2 5.1-2.6 2-4 0.9-0.4 2.9-3.9 0.9-5.9-2.5-1.7-5.3-4-0.3-7.3-5.6-4.3-0.7-6.6-3.3-3.9-0.6-2 1.2-3.6-0.2-3 3.7-4.4 1.2-1.9-4.5-0.6-6.7-4.6-2.2 0.4-4.3-3.5-0.4-0.1-5.4 5.3 1.6 4.1-2-4.7-3.9-2.4-3.6-3.8 1.6 0.6 4.7-2.6-4.1 1.8-2.2 5.6-1.3 3.9 1.8 4.8 5 2.6-0.3 5.9-0.1-1.7-3.2 3.8-2.2 3.4-3.7 7.9 3.4 1.9 5 2.3 1.3 5.5-0.3 2.1 1.2 4.3 6.6 7.1 4.4 4.2 3 6.3 3.1 7.7 2.8 0.8 3.9z"
            id="TM"
            name="Turkmenistan"
            fill={visitedCountries.includes('TM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1692.7 562.1l0.1-1.9-0.5-1.3 0.8-1.5 4.9-1.4 4-0.3 1.8-0.8 2.1 0.8-2.2 1.8-6.1 2.8-4.9 1.8z"
            id="TL"
            name="Timor-Leste"
            fill={visitedCountries.includes('TL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1048.2 289.1l-0.1 4.9-2.6 1.8-1.6 2.1-3.6 2.5 0.6 2.6-0.4 2.8-2.6 1.4-2.6-11.5-3.4-2.6-0.1-1.5-4.5-3.9-0.6-4.8 3.2-3.6 1.1-5.3-1-6.1 1-3.3 5.7-2.5 3.7 0.7 0 3.3 4.4-2.4 0.4 1.2-2.5 3.2 0.1 2.9 1.9 1.6-0.5 5.6-3.5 3.2 1.2 3.5 2.8 0.1 1.4 3.1 2.1 1z"
            id="TN"
            name="Tunisia"
            fill={visitedCountries.includes('TN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1201.7 235.3 1207.2 235 1212.8 238.2 1214.1 240.4 1214.2 243.5 1218.4 245.1 1220.8 246.9 1217.5 248.8 1220.4 256.1 1219.7 258.1 1223.5 263.2 1221.1 264.3 1219 262.7 1212.7 261.8 1210.6 262.8 1204.7 263.8 1201.8 263.7 1196.1 266.1 1191.7 266.1 1188.7 264.9 1183.1 266.7 1181.2 265.5 1181.4 269 1180.2 270.4 1178.9 271.8 1176.6 268.9 1178.3 266.5 1175.1 267.1 1170.5 265.6 1167.3 269.3 1159.3 270 1154.6 266.6 1148.9 266.4 1147.9 269 1144.3 269.8 1138.9 266.4 1133.1 266.5 1129.3 260.1 1125.1 256.6 1127.1 251.6 1123.5 248.5 1128.6 242.4 1136.6 242.2 1138.2 237.3 1148.2 238.2 1153.8 234.1 1159.6 232.3 1168.1 232.1 1177.9 236.6 1185.8 239.1 1191.6 238.1 1196.2 238.7 1201.7 235.3 Z"
            name="Turkey"
            id="TR"
            fill={visitedCountries.includes('TR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1121.9 239.9 1123.1 239.2 1124.2 235.2 1121.5 233.5 1126.5 231.5 1131.1 232.3 1132 234.8 1136.8 236.8 1136.1 238.4 1129.9 238.7 1127.9 240.7 1124 244.1 1122 241.2 1121.9 239.9 Z"
            name="Turkey"
            id="TR"
            fill={visitedCountries.includes('TR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-0.1 3.9-1.2 10.3z"
            id="TW"
            name="Taiwan"
            fill={visitedCountries.includes('TW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1167 508.4l-0.2 3.9-1.1 4.5 1.6 2.5 2.5-1.5 3.3-0.4 0.7 0.8 3.3-1.6-2.3-2.2 1.9-2.9 2.8-2.9 20.5 13.1 0.3 3.7 8.1 6.4-2.8 8 0.3 3.6 3.5 2.3 0.2 1.7-1.7 3.9 0.3 1.9-0.4 3.1 1.8 4 2.2 6.4 2 1.4-4.6 3.7-6.2 2.5-3.4-0.1-2.1 1.9-3.9 0.2-1.5 0.8-6.7-1.8-2.2 0.2 0.1-0.1-1.8-2.4-0.3-6.8-2.9-3.4-0.4 1.2-1-1.7-5.5-1.2-3.2-1.9-3.6-1.1-2.2-1.1-0.3-0.2-2.7-6.6-0.4-3.9-4.5-4.4 1.4-2.4-1.1-2.6 0.2-2.7-1-0.9 0.3-2.8 0.6-0.1 2-2.3 2.3-3.4 1.4-1.3 0-2.1-1.2-1.5-0.3-2.5 1.6-0.8 0.3-3.8-2.2-3.6 2-0.8 6.2 0.1z"
            id="TZ"
            name="Tanzania"
            fill={visitedCountries.includes('TZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1179 474.5l2.7 4.5 0.7 3.2 2.6 7.4-2.1 4.7-2.8 4.2-1.6 2.6 0 0.3-0.2-0.4-3-1.3-2.4 1.6-3.6 0.9-2.6 3.7 0.3 2.5-6.2-0.1-2 0.8-3.4 2-1.4-0.7 0.1-4.8 1.3-2.5 0.3-5.1 1.2-3 2.2-3.3 2.1-1.8 1.9-2.2-2.3-0.9 0.3-7.5 2.3-1.8 3.6 1.5 4.5-1.5 4 0 3.5-3z"
            id="UG"
            name="Uganda"
            fill={visitedCountries.includes('UG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1157.2 174.6l2.3 2.7 0.1 1.2 6.7 2.2 3.6-1 3.6 2.9 2.9-0.1 7.7 2 0.4 1.9-1.3 3.2 1.8 3.5-0.3 2.1-4.8 0.4-2.2 1.8 0.4 2.7-3.9 0.5-3 2.1-4.6 0.3-4 2.4 1 3.9 2.8 1.5 5.1-0.4-0.6 2.3-5.4 1.1-6.3 3.6-3.1-1.3 0.7-2.9-5.9-1.9 0.7-1.2 4.6-2.1-1.7-1.4-8.1-1.6-0.8-2.4-4.5 0.8-1.3 3.5-3.3 4.6-2.4-1.1-2.3 1.1-2.4-1.2 1.2-0.7 0.6-2.1 1.1-2.1-0.6-1.1 1-0.5 0.6 0.9 3 0.2 1.3-0.5-1-0.6 0.2-1-2-1.6-1.1-2.6-2-1 0.1-2.1-2.6-1.7-2-0.3-4-1.9-3.2 0.6-1.1 0.9-2.1 0-1 1.5-3.6 0.6-1.6 1-2.5-1.6-3.2 0-3.2-0.7-2 1.4-0.5-1.7-3-1.7 0.7-2.5 1.2-1.7 1.1 0.4-1.6-2.8 3.8-5.2 2.3-0.7 0.3-1.7-3.2-5.4 2.3-0.3 2.4-1.6 3.8-0.2 4.9 0.5 5.7 1.5 3.9 0.1 1.9 0.9 1.7-1.1 1.5 1.5 4.3-0.3 2.1 0.6-0.3-3.1 1.3-1.4 4.1-0.3 1.8 0.2 1-1.4 1.5 0.3 4.9-0.6 3.8 3.5-0.9 1.3 0.8 1.9 3.9 0.3z"
            id="UA"
            name="Ukraine"
            fill={visitedCountries.includes('UA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M699.7 718.6l-1.6 4.1-5.4 3.5-4.2-1.3-2.8 0.7-5.5-2.7-3.6 0.2-3.9-3.6-0.4-4.1 0.9-1.4-1.2-6.4 0.4-6.6 0.5-5.2 3.4-0.7 6.3 5 1.9-0.2 6.3 4.1 4.8 3.6 3.8 4.3-1.8 3.1 2.1 3.6z"
            id="UY"
            name="Uruguay"
            fill={visitedCountries.includes('UY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1352.7 230.7l1.7 0.6-3 4.1 4.6 2.4 3.2-1.6 7.2 3.4-5.3 4.6-4.1-0.6-2.1 0.1-1.3-1.7 0.2-3-6.5 1.5-0.5 4.1-1.5 3.5-4.4-0.3-0.6 2.8 4.2 1.5 2.4 4.8-1.3 6.5-4.3-1.4-3 0-0.8-3.9-7.7-2.8-6.3-3.1-4.2-3-7.1-4.4-4.3-6.6-2.1-1.2-5.5 0.3-2.3-1.3-1.9-5-7.9-3.4-3.4 3.7-3.8 2.2 1.7 3.2-5.9 0.1-6.2-23.4 12-3.7 1.1 0.5 9.2 4.5 4.8 2.4 6.6 5.7 5.7-0.9 8.6-0.5 7.6 4.6 1.5 6.4 2.6 0.1 2.5 5.2 6.7 0.2 2.3 3 2 0 0.9-4.6 5.4-4.4 2.6-1.2z"
            id="UZ"
            name="Uzbekistan"
            fill={visitedCountries.includes('UZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M648.7 448.1l-4.7 3.8-0.5 2.3 1.8 2.4-1.4 1.2-3.5 1 0 3-1.6 1.8 3.7 4.8 0.7 1.8-2.1 2.5-6.4 2.4-4.1 1-1.7 1.5-4.5-1.6-4.1-0.8-1.1 0.6 2.5 1.6-0.3 4.3 0.7 4.1 4.8 0.5 0.3 1.4-4.1 1.8-0.7 2.7-2.4 1.1-4.2 1.5-1.1 2-4.4 0.4-3.1-3.4-1.6-6.4-1.5-2.3-2-1.4 2.9-3.2-0.2-1.4-1.5-1.9-1.1-4.3 0.6-4.6 1.3-2.2 1.2-3.4-2-1.1-3.2 0.7-4.1-0.3-2.3 0.7-3.8-5.6-3.3-0.8-7.3 0.6-1.2-2.2-1.4-0.5-0.1-1.4 0.7-2.4-0.3-2.5-1.2-1.5-0.6-2.9-2.9-0.4 1.8-3.8 0.9-4.6 1.8-2.4 2.3-1.8 1.6-3.2 3.7-1.1-0.2 1.5-3.4 0.8 1.7 2.9-0.3 3.4-2.7 3.7 1.9 5.1 2.5-0.4 1.5-4.7-1.7-2.2 0-4.9 7.2-2.6-0.6-3 2.1-2.1 1.7 4.6 4 0.1 3.4 3.5 0.2 2.2 5 0 6.1-0.6 3.1 2.8 4.2 0.8 3.3-2 0.1-1.6 7.1-0.4 6.7-0.1-4.9 1.9 1.8 3.1 4.5 0.4 4.2 3.2 0.7 5.1 2.9-0.1 2.2 1.5z"
            id="VE"
            name="Venezuela"
            fill={visitedCountries.includes('VE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1586.5 363.5l-6.5 5.4-3.7 6.1-0.6 4.5 5.3 6.7 6.5 8.4 5.7 4 4.1 5.1 4 11.9 0.4 11.3-4.3 4.2-6.1 4.2-4.2 5.3-6.6 6-2.3-4.1 1.2-4.4-4.4-3.6 4.6-2.6 5.9-0.5-2.8-3.8 9-5-0.1-7.7-1.8-4.3 0.2-6.4-2-4.5-4.9-4.5-4.4-5.6-5.7-7.6-7.3-3.9 1.2-2.3 3.3-1.7-3-5.6-6.8 0-3.5-5.8-4-5.1 2.7-1.6 4.4 0.1 5.3-0.8 4.1-3.4 3.1 2.4 5.3 1.2-0.3 3.7 3.1 2.6 5.9 1.7z"
            id="VN"
            name="Vietnam"
            fill={visitedCountries.includes('VN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1283.8 394.9l-4 1.7-0.9 2.9 0 2.2-5.4 2.7-8.8 3-4.7 4.5-2.5 0.4-1.7-0.4-3.2 2.7-3.5 1.2-4.7 0.3-1.4 0.4-1.1 1.7-1.5 0.5-0.8 1.6-2.8-0.2-1.7 0.9-4-0.3-1.6-3.8 0-3.5-1-1.9-1.3-4.7-1.8-2.6 1.1-0.4-0.7-2.9 0.6-1.2-0.4-2.8 2.4-2.1-0.8-2.7 1.3-3.1 2.4 1.6 1.5-0.6 6.4-0.1 1.1 0.6 5.5 0.7 2.1-0.3 1.5 2.1 2.6-1.1 3.5-6.7 5-2.9 15.9-2.5 5.2 10.6 2.2 4.5z"
            id="YE"
            name="Yemen"
            fill={visitedCountries.includes('YE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1162.1 556.8l0.3 0.2 2.2 1.1 3.6 1.1 3.2 1.9 2.6 2.9 1.3 5.4-1 1.7-1.3 5.2 0.9 5.4-1.8 2.2-2 6 2.9 1.6-17.2 5.3 0.4 4.6-4.3 0.9-3.3 2.5-0.8 2.2-2 0.6-5.1 5.2-3.2 4.2-1.9 0.1-1.8-0.7-6.2-0.7-1-0.5 0-0.5-2.2-1.5-3.6-0.3-4.6 1.4-3.6-4-3.6-5.2 0.8-20.5 11.7 0.1-0.4-2.2 0.9-2.4-0.9-3 0.7-3.1-0.6-2 1.9 0.1 0.3 2 2.7-0.1 3.5 0.6 1.9 2.9 4.4 0.9 3.5-2 1.2 3.3 4.3 0.9 2 2.8 2.2 3.5 4.3 0-0.2-6.9-1.6 1.2-3.9-2.5-1.5-1.2 0.9-6.4 1.1-7.6-1.2-2.8 1.7-4.1 1.5-0.8 7.7-1.1 0.9 0.3-0.3 1.4 1.9 0.5 1.2 1.3 1-0.3-0.5-1.1z"
            id="ZM"
            name="Zambia"
            fill={visitedCountries.includes('ZM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1159.4 644.7l-2.9-0.7-1.9 0.8-2.7-1.1-2.2 0-3.4-2.9-4.3-1-1.5-4.1 0.1-2.3-2.3-0.7-6.1-7-1.6-3.7-1.1-1.2-1.9-5.1 6.2 0.7 1.8 0.7 1.9-0.1 3.2-4.2 5.1-5.2 2-0.6 0.8-2.2 3.3-2.5 4.3-0.9 0.2 2.4 4.7-0.1 2.6 1.3 1.1 1.6 2.7 0.5 2.8 2-0.4 8.2-1.3 4.4-0.4 4.8 0.8 1.9-0.9 3.8-0.8 0.6-1.7 4.6-6.2 7.3z"
            id="ZW"
            name="Zimbabwe"
            fill={visitedCountries.includes('ZW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1222.1 512.6l-3.3-5.3-0.2-23.4 4.9-7.2 1.5-2.1 3.6-0.1 5-4.5 7.3-0.3 15.6-19.3-4.8 0.1-18.7-7.6-2.2-2.3-2.2-3.1-2.2-3.6 1.2-2.2 1.9-3.5 1.9 1.2 1.2 2.7 2.7 2.7 2.8 0 5.2-1.7 6.1-0.7 4.9-2 2.8-0.4 2-1.2 3.2-0.2 1.8-0.2 2.5-0.9 3-0.7 2.5-2.2 2.2 0 0.2 1.8-0.4 3.7 0.2 3.4-1.1 2.3-1.4 7-2.4 7.1-3.3 8.2-4.6 9.4-4.7 7.2-6.6 8.8-5.6 5.2-8.4 6.4-5.3 4.8-6.2 7.8-1.3 3.4-1.3 1.5z"
            id="SO"
            name="Somalia"
            fill={visitedCountries.includes('SO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1097.8 230.8l-1.2 0.3-2.9 1-0.1 1.3-0.7-0.1-0.6-2.3-1.3-0.7-1.2-1.7 0.8-1.4 1.2-0.4 0.5-2.1 0.9-0.4 0.8 0.9 1 0.4 0.8 1 0.9 0.3 1.1 1.2 0.7-0.1-0.4 1.6-0.6 0.7 0.3 0.5z"
            id="XK"
            name="Kosovo"
            fill={visitedCountries.includes('XK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1159.4 644.7l2.2 9 1.1 4.6-1.4 7.1 0.4 2.3-2.7-1.1-1.7 0.4-0.6 1.9-1.7 2.4-0.1 2.2 3.1 3.5 3.2-0.7 1.4-2.8 4.1 0-1.7 4.7-1 5.3-1.7 2.9-4 3.3-1.1 0.9-2.6 3.3-1.8 3.3-3.5 4.6-6.7 6.6-4.1 3.8-4.3 3-5.9 2.4-2.7 0.4-0.9 1.8-3.2-1-2.7 1.2-5.7-1.2-3.3 0.8-2.2-0.4-5.8 2.6-4.6 1-3.5 2.4-2.4 0.2-2.1-2.3-1.8-0.1-2.2-2.9-0.3 0.9-0.6-1.7 0.3-3.8-1.5-4.3 1.8-1.2 0.1-4.9-3.3-6-2.4-5.4 0-0.1-3.6-8.3 2.8-3.2 2 1.8 0.8 2.7 2.5 0.5 3.4 1.2 2.9-0.5 5-3.3 1.1-23.7 1.4 1 3 6.1-0.6 3.9 1.1 2.3 4-0.7 2.8-2.9 2.7-1.9 1.5-3.1 2.8-1.4 2.3 0.7 2.5 1.8 4.5 0.3 3.6-1.4 0.6-2 1.2-3.1 3-0.5 1.8-2.4 2-4.3 5.2-4.8 8.1-4.7 2.2 0 2.7 1.1 1.9-0.8 2.9 0.7z m-20.3 53.2l1.1-2 3.1-1 1.1-2.1 1.9-3.1-1.7-2-2.2-2-2.7 1.4-3.1 2.5-3.2 4 3.7 5 2-0.7z"
            id="ZA"
            name="South Africa"
            fill={visitedCountries.includes('ZA') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1886.2 764.4 1885.4 767 1891 764.4 1890.5 767.1 1888.4 769.8 1884.2 772.7 1877.1 777.4 1872.4 780 1871.8 783 1867.8 783.1 1861.5 785.5 1856.8 789.6 1848.6 796 1842.3 798.8 1838.3 800.6 1833.7 800.5 1832.2 798.4 1827.1 798 1828.1 795.6 1834.6 791 1846 784.7 1850.3 783.5 1855.9 781.1 1862.9 777.8 1868.6 774.5 1874.6 769.8 1877.7 768.2 1881.2 764.6 1887 761.7 1886.2 764.4 Z"
            id="NZ"
            name="New Zealand"
            fill={visitedCountries.includes('NZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1915.2 733.9 1914.8 740.7 1917.7 736.3 1919 738.1 1916.6 742.9 1919.5 745 1922.7 745.5 1927.4 743.1 1929.6 743.8 1924.4 749.5 1920.2 753.2 1916.3 753.1 1913.5 755 1912 757.8 1910.4 758.9 1905.8 762.4 1899.9 766.7 1893.9 769.3 1894.4 767.6 1892.9 766.7 1899.8 761.5 1900.7 757.9 1896.9 755.4 1898.7 753.1 1904 750.9 1908.2 745.9 1910.7 741.8 1911.3 737.5 1912.1 736.4 1911.2 733.7 1910.5 728.1 1910.9 723.5 1913.1 723 1914 726.6 1917.2 728.2 1915.2 733.9 Z"
            id="NZ"
            name="New Zealand"
            fill={visitedCountries.includes('NZ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 655.1 837.9 661.1 851.5 666.1 851.5 669.1 851.7 668.6 854.1 665.4 856 663 855.8 659.9 855.3 655.7 853.5 650.3 852.6 642.8 849.2 636.4 846 626.6 839.1 631.2 840.4 639.8 844.5 647.1 846.7 648.3 843.9 648 839.7 651.4 837.1 655.1 837.9 Z"
            id="CL"
            name="Chile"
            fill={visitedCountries.includes('CL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 614.4 647.8 615.3 649.4 614.1 656.1 608.5 659.2 610.1 669.9 609.3 672 611.3 674.5 608 678.5 605.4 684.5 604.5 690.4 606.2 696.6 604.1 703.2 609 714.3 610.6 715.5 612 721.4 610.4 727.6 611.8 733 608.8 737.2 610.4 743 613.7 749.3 611.2 751.6 611.4 757.3 612.2 763.8 615.5 771.6 613.8 772.9 617.5 780.2 620.6 782.6 619.8 785.3 622.6 786.5 624 788.9 622.2 790.1 624 793.8 625.1 802.1 624.4 807.5 626.2 810.7 626.1 814.6 623.4 817.4 626.5 823.9 629.1 826.2 632.2 825.8 634.1 830.4 637.6 834 649.7 834.8 654.6 835.8 650.3 835.8 648.6 837.3 645.2 839.5 646.9 845.2 645 845.3 638.7 843.4 631.2 839.1 623.6 835.6 620.4 831.7 620.1 828.1 615.9 823.9 610.9 813.3 610.7 807.3 614.1 802.5 605.8 800.6 608.5 795.1 606.5 784.6 613 786.8 611.2 773.7 607.2 772 608.2 779.9 604.7 779 603.2 770 601.2 758.2 602.3 753.8 599 747.6 596.6 740.4 598.8 740.1 599.4 729.8 600.6 719.5 600.7 710 597.4 700.3 598 695 595.9 687.1 597.7 679.3 596.8 666.9 596.8 653.5 596.9 639.2 595.4 628.7 593.3 619.6 596.1 618 597.2 614.7 600.4 619.1 601.6 623.7 604.8 626.4 603.7 632.6 607.4 639.8 610.5 648.7 614.4 647.8 Z"
            id="CL"
            name="Chile"
            fill={visitedCountries.includes('CL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-0.5 2.5-1.7 4-9 6.5-2.6 4 0.2 0.9 2.1-0.9 5.6-1.2 2.3-2.9 0 1.1 6.5z"
            id="NL"
            name="Netherlands"
            fill={visitedCountries.includes('NL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M946.9 263.7l-2.2 1.6-2.8-0.9-2.7 0.7 0.9-5-0.3-3.9-2.4-0.6-1.1-2.4 0.5-4.2 2.2-2.3 0.5-2.6 1.2-3.8 0-2.7-0.9-2.3-0.2-2.2 1.9-1.6 2.2-0.9 1.2 3.1 3 0 0.9-0.8 3.1 0.2 1.3 3.2-2.4 1.7-0.3 5-0.8 0.9-0.3 3.1-2.3 0.5 2 3.8-1.6 4.2 1.8 1.9-0.8 1.7-2 2.4 0.4 2.2z"
            id="PT"
            name="Portugal"
            fill={visitedCountries.includes('PT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1689.5 177.4 1703.2 188.4 1694.3 186.4 1698 195.4 1707.6 201.8 1710.6 206.2 1704.1 202.4 1704.2 207.3 1699.5 202 1695.7 195.9 1690.1 189.2 1687.7 184.4 1681.3 176.2 1673.3 170.1 1666.5 161.7 1668.4 158.9 1664 156.1 1665.3 155.2 1670.2 159.2 1677.1 165.1 1682.3 171.2 1689.5 177.4 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1094.6 155.4 1085.8 155.5 1079.9 154.8 1080.6 152.2 1086.9 150.2 1092 151.3 1094.2 152.2 1094 153.9 1094.6 155.4 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1548.4 48.2 1542.5 48.3 1533.6 47.7 1532.6 47.4 1533.3 45.4 1537.5 44.9 1545.9 46.9 1548.4 48.2 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1561 38.7 1559.9 40.7 1553 40.3 1542.7 38.3 1540.9 36.7 1549.2 37.4 1561 38.7 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1535.5 36.3 1538.6 40.1 1524.3 39.9 1519.7 41.1 1507.2 37.8 1503.8 34.4 1507.3 33.5 1517.5 33.7 1535.5 36.3 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1218.8 61.3 1216.6 61.7 1203.1 61 1200.8 58.7 1192.9 57.3 1190.9 54.4 1194.4 53.3 1192.8 50.5 1198.2 46.1 1194.2 45.5 1200.9 41 1198.4 38.7 1205.2 36.1 1215.5 32.9 1227.2 32 1232.2 30.2 1238.9 29.6 1243.1 31.5 1241.8 33 1230.4 35.5 1220.5 37.8 1211.8 42.6 1209 47.6 1205.7 52.6 1208.8 56.9 1218.8 61.3 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1661.7 231 1660.3 229.9 1658.4 226.6 1660.9 226.5 1657 219 1652.3 213.6 1655.2 211.4 1662.1 212.5 1661.5 206.3 1658.7 199.5 1659 197.2 1657.7 191.5 1650.8 193.4 1648.2 195.8 1640.6 195.8 1634.6 190 1625.6 185.5 1615.6 183.5 1609.4 177.5 1604.9 173.7 1601.1 171 1593.4 164.8 1587.4 162.6 1578.8 160.7 1572.6 160.9 1567.5 162 1565.8 165.1 1569.5 166.5 1572 169.9 1570.7 171.9 1570.9 178.4 1572.8 181.2 1568.4 185.1 1561 182.7 1555.4 183.3 1551.5 181.2 1548.1 180.5 1543.7 184.9 1537.8 185.9 1534.2 187.5 1527.4 186.5 1522.8 186.5 1517.9 183.3 1511.3 180.4 1505.9 179.5 1500.2 180.3 1496.2 181.5 1487.7 178.9 1484.1 174.3 1477.4 172.7 1472.6 171.9 1465.6 169.4 1464.3 175.8 1468.3 179.4 1465.9 183.8 1457.9 182.2 1452.9 182 1448.1 179.1 1442.9 179 1437.6 177.1 1431.7 180 1425 185.3 1420.3 186.4 1418.6 186.9 1414.2 183.1 1408.2 184 1404.9 181.3 1400.9 180.1 1396.8 176.5 1393.5 175.4 1387.3 177 1378.9 173.5 1377.8 176.7 1359.5 161.1 1351.1 156.4 1351.9 154.4 1342.7 160.2 1338.3 160.5 1337.2 157.2 1330.1 155.1 1325.8 156.6 1321.4 150.3 1312.3 149 1309.2 151.5 1298.3 153.8 1296.6 155.3 1279.6 157.4 1278.2 159.5 1283.3 163.7 1279.3 165.3 1280.8 166.9 1277.3 169.9 1286.7 174.2 1286.5 177.1 1279.5 176.8 1278.7 178.7 1271.4 175.5 1263.7 175.6 1259.3 178.2 1252.7 175.7 1240.7 171.4 1233.1 171.6 1225 178.3 1225.6 182.8 1219.6 179.2 1217.4 186.1 1219.2 187.3 1217.5 192.1 1222.8 196.3 1226.4 196.1 1230.7 200.3 1230.9 203.5 1233.7 204.6 1232.3 208.3 1227.7 209.3 1224.1 215.8 1230.1 221.9 1230.5 226.1 1237.8 233.6 1235.3 236.2 1234.7 237.8 1232.3 237.3 1228 233.5 1226.5 233.3 1222.9 231.8 1220.8 229.2 1215.7 227.9 1212.8 228.9 1211.6 227.7 1204 224.6 1196.3 223.6 1191.7 222.5 1191.3 223.3 1183.7 217.9 1177.5 215.5 1172.4 211.8 1176 210.8 1179.2 205.6 1175.9 203.1 1182.8 200.5 1182.4 199.1 1178.1 200.1 1177.7 197.4 1179.9 195.6 1184.7 195.2 1185 193.1 1183.2 189.6 1184.5 186.4 1184.1 184.5 1176.4 182.5 1173.5 182.6 1169.9 179.7 1166.3 180.7 1159.6 178.5 1159.5 177.3 1157.2 174.6 1153.3 174.3 1152.5 172.4 1153.4 171.1 1149.6 167.6 1144.7 168.2 1143.2 167.9 1142.2 169.3 1140.4 169.1 1138.4 165.1 1136.9 163.1 1137.7 162.5 1141.6 162.7 1143.2 161.4 1141.5 159.8 1138.1 158.7 1138.1 157.6 1136 156.5 1132.2 152.5 1132.9 150.9 1131.8 148 1127 146.6 1124.6 147.3 1123.7 145.8 1118.4 144.3 1116.3 140.7 1115.3 137.8 1112.8 136.5 1114.4 134.6 1112 129 1114.6 125.6 1113.7 124.6 1118.2 121.3 1112.8 118.5 1120.8 111.1 1124.2 107.7 1125.1 104.8 1117.7 100.9 1118.6 97.1 1113.7 92.9 1115.4 88.1 1108.9 81.8 1111.8 77.6 1104.5 73.9 1104.1 70.1 1107.3 69.6 1113.7 67.5 1117.4 65.6 1125.1 68.8 1136.8 70.1 1154.5 76.3 1158.6 78.9 1160.1 82.6 1156.4 85.5 1149.9 87 1129.7 82.8 1126.8 83.5 1134.9 87.6 1135.9 90.2 1137.8 96 1143.9 97.7 1147.7 99.2 1147.5 96.4 1144.1 94 1146.2 91.8 1157.8 95.4 1161 94 1156.7 89.8 1164.8 84.4 1168.9 84.7 1173.5 86.6 1174.6 82.8 1169.9 79.5 1170.7 76.2 1166.4 72.8 1178.7 74.6 1182.3 77.6 1177.2 78.3 1178.4 81.4 1182.5 83.3 1188.5 82.1 1188.1 78.6 1195.8 75.9 1208.2 71.3 1211.4 71.5 1208.9 74.8 1214.3 75.4 1216.4 73.5 1224.1 73.4 1229.1 71.1 1235.5 74.4 1238.3 70.8 1232.3 67.7 1233.5 65.9 1246.5 67.5 1253.1 69.2 1271.7 75.4 1272.8 72.6 1266.9 69.7 1266.1 68.6 1260.8 68 1260.6 65.5 1255.9 61.3 1254.8 59.6 1259.1 54.9 1258.5 50.1 1260.7 49.1 1272.1 50.5 1275 53.4 1274.1 57.6 1277.8 59.3 1281.6 63 1285.4 70.4 1292.1 73.7 1292.6 77.4 1289.1 85.2 1294.4 86 1294.9 84 1298.7 82.6 1298.2 79.9 1300.1 77.2 1295.7 74.1 1295.3 70.5 1290.5 70.1 1287.6 67.1 1287.2 61.7 1279 57.4 1283.7 53.9 1280 50.2 1281.9 50.1 1286.1 52.9 1288.2 58 1293.2 59 1288.6 55.2 1293.7 53.1 1301.8 52.8 1311.4 55.8 1304.5 51.5 1299.6 46 1305.5 45 1315 45.2 1322.8 44.5 1317.2 41.9 1318.5 38.6 1322.7 38.4 1327.6 36 1336.9 35.3 1336.7 33.9 1346 33.5 1350.3 34.6 1355.7 32 1362.7 32.1 1361.2 29.9 1362.1 27.9 1368.3 25.9 1376.6 27.5 1373.1 28.7 1382.5 29.4 1386.6 31.8 1388.5 30.6 1399.4 30.7 1411 33.1 1416.5 34.9 1419 37.5 1416.6 39 1410 41.8 1408.9 43.3 1414.5 44 1421.7 45.3 1424.1 44.3 1429.9 47.6 1430.1 46.3 1435.3 45.5 1448.9 46.3 1452.7 48.7 1470.1 49.5 1465.3 45.6 1474.8 46.5 1480.9 46.4 1490.8 49.1 1496.8 52.4 1497.2 54.6 1507.3 58.8 1516.3 60.9 1513.3 55.4 1522.7 57.7 1527.7 56.3 1537.5 57.9 1538.5 56.5 1546.1 57.2 1536.7 52.3 1538.8 50.1 1579.2 53.5 1587.1 56.6 1603.4 60.6 1618.2 59.6 1627.5 60.5 1634.1 62.7 1639.2 66.6 1646.5 68.1 1650.4 67 1657.4 66.9 1666.7 67.9 1673.6 67.3 1687.9 72.1 1690.4 70.4 1681.9 67 1680.1 64.6 1695.4 66.1 1703.4 65.8 1719.2 68.3 1728.7 70.7 1761.9 92.8 1759.9 95.3 1753.7 94.9 1761.9 97.9 1771 102.6 1775.2 104.1 1779 106.5 1780 108 1770 106.8 1763.4 111.1 1760.4 111.8 1758.8 115.9 1756.8 119.5 1758.5 122.2 1747 118.1 1740.9 122.7 1736.2 120.5 1734.8 123.1 1727.8 122.2 1730.9 126.1 1732 131.9 1734.9 134.3 1741.7 135.6 1750.8 144.3 1746.7 144.6 1750.1 149.6 1754.8 152.2 1749.8 155.3 1755.2 162.3 1749.5 163.8 1754 170 1752.3 175.8 1746.6 171.5 1736.1 162.6 1719.9 149 1713.4 140.7 1713.5 137.1 1710.7 134.3 1716.4 133 1716.2 125.5 1716.9 119.5 1719.4 114.8 1712.8 106.6 1708.1 107.1 1711.3 111.9 1707.7 118.3 1695.4 111.1 1686.3 113.1 1686.3 122.9 1694 126.5 1685.5 128.1 1679.1 128.7 1674.8 124.4 1666.8 123.5 1664.3 126.4 1649.2 125.4 1636 127.1 1632.5 138.8 1627.5 153 1635.7 153.8 1641.4 157.6 1647.2 158.9 1647.6 155.9 1653.2 156.3 1666 163 1670.7 168.2 1672.1 174.4 1677.6 181.8 1682.9 191.7 1681.9 200.8 1683.2 205.1 1681.2 212.5 1679.1 219.8 1678.2 223.5 1673.6 227.2 1670.5 227.3 1665.3 224.2 1661.2 228.9 1661.7 231 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1367.1 23.1 1349 24.9 1347.7 18.8 1349.9 18.3 1353 18.6 1365.6 21.2 1367.1 23.1 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1164.8 13.1 1160.5 13.6 1157.6 14 1157.6 14.7 1154 15.4 1149.5 14.4 1150.6 13 1142.8 12.9 1149.1 12.1 1154.3 12.1 1155.8 13.2 1157.1 12.2 1159.9 11.5 1165.7 12.4 1164.8 13.1 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1345.1 20.4 1338 21 1326.3 19.7 1318.2 18 1311.6 14.8 1305.7 14 1311.1 11.1 1317.3 10.2 1326.9 12.2 1340.6 16.4 1345.1 20.4 Z"
            id="RU"
            name="Russian Federation"
            fill={visitedCountries.includes('RU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M976.6 223.4l2 2.4 9.5 2.9 1.9-1.4 5.8 2.9 5.9-0.8 0.4 3.7-4.9 4.2-6.6 1.4-0.5 2.1-3.2 3.5-2 5.2 2 3.7-3 2.8-1.2 4.2-4 1.3-3.7 4.9-6.8 0.1-5-0.1-3.4 2.2-2.1 2.4-2.6-0.5-1.9-2.2-1.4-3.6-4.9-1-0.4-2.2 2-2.4 0.8-1.7-1.8-1.9 1.6-4.2-2-3.8 2.3-0.5 0.3-3.1 0.8-0.9 0.3-5 2.4-1.7-1.3-3.2-3.1-0.2-0.9 0.8-3 0-1.2-3.1-2.2 0.9-1.9 1.6 0.5-4.5-2-2.7 7.4-4.6 6.2 1.1 6.9 0 5.4 1.1 4.3-0.4 8.3 0.3z"
            id="ES"
            name="Spain"
            fill={visitedCountries.includes('ES') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1035.7 231.4 1034.2 236.3 1031.8 235 1030.5 230.8 1031.4 228.4 1034.6 226 1035.7 231.4 Z"
            id="FR"
            name="France"
            fill={visitedCountries.includes('FR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1014.4 185 1015.5 185.5 1016.9 185.4 1019.3 187 1026.5 188.2 1024.1 192.4 1023.7 196.9 1022.4 198 1020.1 197.4 1020.3 199 1016.7 202.5 1016.7 205.4 1019.1 204.4 1020.9 207.1 1020.8 208.9 1022.3 211.3 1020.6 213.2 1022.1 218.1 1024.9 218.9 1024.4 221.6 1019.9 225.2 1009.7 223.5 1002.3 225.6 1001.7 229.4 995.8 230.2 990 227.3 988.1 228.7 978.6 225.8 976.6 223.4 979.3 219.6 980.3 207 975.2 200.4 971.5 197.2 963.9 194.8 963.5 190.2 970 188.9 978.3 190.5 976.8 183.4 981.5 186.1 992.9 181.3 994.4 176.2 998.6 174.9 999.4 177.1 1001.6 177.2 1004 179.7 1007.5 182.6 1010 182.1 1014.4 185 Z"
            id="FR"
            name="France"
            fill={visitedCountries.includes('FR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <g
            fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
            id="US"
            name="United States"
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          >
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 118.8 379.3 117.7 380.4 116.5 379.5 117.1 377.7 116.7 375.3 117.2 374.6 118.4 373.6 118.3 372.3 118.7 371.7 119.1 371.8 121 372.9 121.9 373.5 122.6 374.3 123.5 376.6 123.3 376.9 120.8 378.3 118.8 379.3 Z"
            />
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 118.1 369.3 116.1 369.7 115.5 368.4 115 367.9 115 367.5 115.7 366.9 117.5 367.5 118.7 368.5 118.1 369.3 Z"
            />
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 115.1 365.9 114.8 366.6 111.8 366.4 112.4 365.6 115.1 365.9 Z"
            />
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 110.4 364.9 110 365.3 109.6 365.2 107.7 365 107.4 363.5 107.2 363.3 108.9 362.4 109.3 362.8 110.4 364.9 Z"
            />
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 102 360.7 101.2 361.3 99.6 360.2 100 359.7 101 359.1 102.3 359.2 102 360.7 Z"
            />
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 539.5 194.5 533.4 196.5 528.7 199 524.1 201.7 523.6 202.6 529.3 201.3 531.4 203.4 536 201.9 540.9 199.8 546.3 197.7 543.2 201 545.7 201.8 548.2 204.2 553.3 202.8 558.4 202.3 558.7 204.1 560.2 204.3 561.4 204.5 562.9 207 558.2 207.6 558.1 207.6 554.4 206.9 549.9 208.1 546.2 208.7 541.5 212.8 538.5 215.1 538.9 215.8 544.4 211.7 545.1 211.7 540.4 216.6 537.5 221 535 224.6 534.4 227.7 533.6 229.2 533 230.9 533.1 234.2 533.4 234.7 535.2 234.6 536.8 233.9 538.2 233.1 541.5 230 543.3 225.8 543.2 221.9 544.6 219.2 547.2 216.1 549.3 213.9 552 212.4 551.6 214.5 553.8 211.4 555.1 210.8 556.8 208.4 560.6 209.7 563.4 212.1 562.6 215 561 217.9 557.2 220.4 556.8 222 557.8 222 562.1 219.3 563.7 219.9 563.2 223.6 562.5 226.2 558.8 229.7 556.8 231.9 554.1 234.3 556.8 235.6 559.3 236 563.3 235.1 567 233.4 570 232.5 574.6 230.7 580.4 226.9 580.5 226.3 580.8 224.4 583.5 223.6 587.4 223.9 591.4 224.4 596 222.3 596.6 219.8 596.4 218.9 603.2 214.5 605.9 213.4 613.7 213.3 623 213.3 624.1 211.8 625.8 211.5 628.3 210.5 631.1 207.6 634.3 202.7 639.8 198 640.9 199.6 644.6 198.6 646.2 200.4 643.3 208.9 645.5 212.5 645.7 214.6 639.3 217.6 633.3 219.8 627.3 221.7 623.3 225.5 622 226.9 620.8 230.3 621.5 233.6 623.6 233.8 623.8 231.5 624.9 232.9 623.9 234.7 620.1 235.7 617.6 235.6 613.4 236.7 611.1 237 608 237.3 603 239.2 611.1 238 612.2 239.2 604.3 241.1 601 241.1 601.4 240.3 599.3 242.1 600.7 242.4 598.2 247 592.9 251.9 593 250.2 591.9 249.9 590.7 248.3 590.7 251.8 591.7 252.9 591.1 255.3 588.7 257.8 584.2 262.9 583.8 262.7 586.7 258.3 584.7 255.9 585.7 250.5 583.8 253.3 583.8 257.4 580.6 256.4 583.6 258.4 582.1 264.5 583.5 265 583.5 267.2 582.5 273.6 577.9 278.3 571.8 280.2 567.4 284 564.6 284.4 561.2 286.8 559.9 288.9 553 293.1 549.2 296.2 545.7 300 543.8 304.5 543.8 309 544.4 314.5 545.9 319 545.4 321.8 546.7 329.2 545.7 333.6 545.1 336.1 543.1 340 541.3 340.8 538.7 340 538.3 337.2 536.5 335.7 534.5 330.2 532.9 325.3 532.5 322.8 534.5 318.5 533.7 315 530.6 309.6 528.7 308.6 522.6 311.6 521.7 311.2 519.7 308.2 516.7 306.6 510.3 307.5 505.7 306.7 501.4 307.2 498.9 308.2 499.5 309.9 498.8 312.5 499.6 313.8 498.4 314.6 496.6 313.7 494.3 314.9 490.4 314.7 487.1 311.3 482.2 312.1 478.6 310.6 475.1 311.1 470.1 312.6 464 317.3 457.9 320.1 454.2 323.1 452.3 326 451.3 330.5 450.9 333.5 451.5 335.7 449.3 335.9 445.7 334.5 441.8 332.5 440.9 329.5 440.7 325 438.3 321.4 437.4 317.6 435.8 313.2 432.6 310.6 428.1 310.8 423.3 315.8 419.3 313.9 417 312 416.6 308.4 415.8 305.1 413.4 302.3 411.3 300.2 410 297.9 400.6 297.9 399.8 300.6 395.5 300.6 384.7 300.6 373.8 296.1 366.8 293 367.7 291.7 360.6 292.4 354.3 292.9 354.6 289.7 352.5 286 350.3 285.2 350.4 283.4 347.5 283 346.3 281.3 341.5 280.7 340.6 279.6 341.4 276.1 338.9 269.7 338.4 260.8 339.3 259.3 338 257.2 336.5 251.8 338.3 246.6 337.4 243.1 341.3 237.8 344.1 232.4 345.2 227.5 350.7 221.5 354.7 215.8 358.7 210.1 363 201.6 364.8 196.3 365.2 193.4 366.6 192.1 372.4 194.3 371.4 200.2 373.6 198.5 376.1 193.4 377.7 188.3 391.8 188.3 406.5 188.3 411.3 188.3 426.4 188.3 441.1 188.3 455.9 188.3 470.8 188.3 487.6 188.3 504.6 188.3 514.8 188.3 516.1 185.9 517.8 185.9 516.9 189.3 517.9 190.3 521.2 190.7 525.8 191.7 529.7 193.6 534.1 192.8 539.5 194.5 Z"
            />
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 275 138.6 268 140.9 267.2 139.3 269.5 136.5 275.9 134.4 279.4 133.5 282 133.9 282 135.8 275 138.6 Z"
            />
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 236 122 232.1 122.9 230.4 121.8 229.6 120.2 235.3 119.2 238.3 119.8 236 122 Z"
            />
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 237.2 99.6 238.4 100.6 241.9 100.1 243.5 101.6 246.8 102.3 245.6 103 240.7 104.2 239 102.9 238.7 101.9 234.4 102.2 234.1 101.7 237.2 99.6 Z"
            />
            <path
              fill={visitedCountries.includes('US') ? '#00FFC2' : ''}
              id="US"
              name="United States"
              className="United States"
              d="M 410 66.6 385.4 87 349.8 119.7 354 119.9 356.8 121.5 357.3 124.1 357.6 127.9 365.2 124.6 371.7 122.7 371.1 125.8 371.9 128.2 373.5 130.9 372.4 135.1 371 142 375.6 145.8 372.4 149.6 367.3 152.5 366.7 150.3 364.2 148.3 367.5 143.1 365.9 138.2 368.6 132.6 364.5 132.2 357.4 132.1 353.6 130.3 350.3 124.2 347 123.1 341.3 121 334.5 121.5 328.5 118.8 325.8 116.3 319.5 117.5 316 121.6 313.1 122 306.5 123.2 300.3 125.2 293.9 126.5 297.1 123 305.5 117.2 312.3 115.4 312.7 114 303.3 117.2 295.9 121.1 284.7 125.3 284.9 128.2 275.9 132.4 268.2 134.9 261.6 136.8 257.6 139.4 247 142.5 242.5 145.3 234.3 147.9 231.6 147.5 225.4 149.1 218.4 151.2 212.3 153.2 202.3 155 202.7 153.9 210.9 151.1 217.5 149.2 226.1 145.9 232.6 145.3 237.6 142.8 248 139.2 250.3 138 256 135.9 261.8 131.4 268 127.9 260.7 129.7 260.4 128.6 255.5 130.8 255.9 127.8 252.3 129.9 253.9 127 246.6 129.3 243.8 129.3 247.5 125.8 250.8 123.6 250.4 121.5 243.2 122.7 242.6 119.9 241.3 118.5 245.3 115.2 244.9 112.7 250.8 109.4 258.5 106.1 263.8 103.2 267.9 102.8 269.7 103.7 276.8 100.9 279.3 101.4 284.9 99.6 287.4 97 286.3 96 292.3 93.8 289.5 93.9 283.3 95.1 280.4 96.4 278.6 95.1 271.7 95.8 267.1 94.4 268.3 92.1 267.3 88.9 276.5 86.5 289.7 83.8 293.2 83.8 288.9 86.6 298.1 86.4 299.3 82.9 297 80.8 297.8 78 297.1 75.7 293.8 74 300.3 71.1 307.8 70.9 316.6 68.5 321.4 65.9 329.3 63.3 334.1 62.7 345.3 60.3 348.4 60.7 358.8 57.9 363.2 59 362.7 61.4 366 60.4 372.3 60.7 370.4 61.9 375.3 62.8 380.2 62.3 386.4 63.9 393.6 64.5 395.8 65.1 402.4 64.3 406.5 65.9 410 66.6 Z"
            />
          </g>
          <path
            d="M677.3 487l1.5-2.8 0.5-2.9 1-2.7-2.1-3.8-0.3-4.4 3.1-5.5 1.9 0.7 4.1 1.5 5.9 5.4 0.8 2.6-3.4 5.9-1.8 4.7-2.2 2.5-2.7 0.4-0.8-1.8-1.3-0.2-1.7 1.7-2.5-1.3z"
            id="GF"
            name="French Guiana"
            fill={visitedCountries.includes('GF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M592.9 422l-0.5-0.2-0.5-0.5 0.1-0.6 0.2 0.3 0.4 0.4 0.3 0.5 0 0.1z"
            id="AW"
            name="Aruba"
            fill={visitedCountries.includes('AW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M634.2 384.9l-0.2 0 0.3-0.4 0.3 0-0.2 0.3-0.2 0.1z"
            id="AI"
            name="Anguilla"
            fill={visitedCountries.includes('AI') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 27.7 593.3 27.4 593.7 27.2 594 27 594.1 26.6 593.8 26.8 593.6 27.1 593.6 27.2 593.4 27.7 593.3 Z"
            id="AS"
            name="American Samoa"
            fill={visitedCountries.includes('AS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 34.3 593.3 33.8 593.4 33.7 593.2 34.1 593.1 34.3 593.3 Z"
            id="AS"
            name="American Samoa"
            fill={visitedCountries.includes('AS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 640.7 391.9 641.3 392.2 641.1 392.5 640.9 392.5 640.2 392.6 640 392.5 640 392 640.3 391.9 640.4 391.6 640.6 391.6 640.7 391.9 Z"
            id="AG"
            name="Antigua and Barbuda"
            fill={visitedCountries.includes('AG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 640.7 388.2 640.9 388.2 641.1 388.4 641.2 388.8 641.1 389.1 640.9 389.2 640.8 389 640.5 388.8 640.5 388.3 640.7 388.2 Z"
            id="AG"
            name="Antigua and Barbuda"
            fill={visitedCountries.includes('AG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1264.1 333.3l0.3 0.1 0.2-0.1 0.4 0.7-0.1 0.2 0.1 0.9 0 0.7-0.2 0.4-0.1-0.4-0.6-0.8 0.1-0.4-0.2-0.7 0-0.4 0.1-0.2z"
            id="BH"
            name="Bahrain"
            fill={visitedCountries.includes('BH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 580.4 366 580 366.5 579.8 367 579.2 367.3 578.7 367.3 578.6 367.2 578.2 367.4 577.7 367.5 577.1 367.3 576.7 367.4 576.6 366.9 576.9 366.7 577.1 366.4 577.5 366.2 577.8 365.8 578.2 365.8 578.5 365.6 578.7 365.9 579.2 366.1 579.7 365.9 580.4 364.9 580.7 364.9 580.7 365.1 580.4 366 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 580.6 364.3 580.4 363.7 581 363.4 581.3 363.7 581.3 363.9 581 364 580.6 364.3 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 581 357.8 581.2 357.7 581.7 358 582.1 358 582.5 358.1 582.8 358.3 582.8 358.6 582.6 358.7 582.1 358.3 581.7 358.3 581.6 358.2 581.1 358.4 580.6 358.2 580.6 358.1 580.8 357.6 581 357.8 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 577.1 356 576.9 356.4 576.9 357.1 576.8 357.5 576.4 357.8 576.2 358.2 575.8 358.5 575.1 358.8 575 359 574.8 358.8 574.9 358.6 575.3 358.5 575.5 358.3 575.5 358.1 575.9 358 576.1 357.6 576.5 357.5 576.8 357.1 576.6 356.8 576.2 356.8 576 356.6 576.4 356.1 576.5 356 577.1 356 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 575.2 355.7 575.3 355.8 575.7 355.8 576.1 356 575.7 356.4 575.6 356.2 575.4 356.2 575 356.1 574.6 355.9 574.3 355.3 574.6 355.2 575 355.3 575.2 355.7 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 566 349.8 566.6 350.5 566.9 350.7 567.2 351.2 566.9 351.1 566.8 350.9 566.5 350.8 566.1 350.4 565.9 350.3 565.7 349.9 566 349.8 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 569.7 349.8 570 350.4 570.2 350.9 570.2 351.3 570.4 351.5 570.6 352.2 570.6 353.1 570.8 353.4 571.3 353.6 571.7 354.2 571.7 355 571.3 354.3 571.3 354.1 571 353.7 570.4 353.5 570.6 353.3 570.3 353 570.3 352.7 570.5 352.4 570.4 351.9 570.1 351.5 570.2 351.4 569.9 351 569.8 350.4 569.6 350.5 569.7 349.8 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 572.6 349.8 572.3 350 572 349.9 571.9 349.7 572.5 349.5 572.6 349.8 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 564.4 347.9 564.3 347.8 564 347.1 564.2 347.1 564.4 347.9 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 574.9 347.4 574.5 348 574.1 348 574.3 347.7 574.4 347.1 574.8 346.8 574.9 347.2 574.9 347.4 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 556.4 346.2 556.1 346.3 555.9 346.6 555.6 346.5 556.2 346.1 556.4 346.2 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 556.6 346.9 557 347.1 557.2 346.9 557.3 346.4 557.5 346.3 557.7 346.9 557.7 347.4 557.6 347.7 557.7 348.3 557.7 348.6 557.3 349.4 557.1 349.5 556.7 349.3 556.9 349 557.3 348.8 557.2 348.7 556.6 349.1 556.4 348.9 556.8 348.6 556.4 348.6 556.2 348.7 556 348.5 556 347.8 556.1 347.6 555.7 347.1 555.7 346.9 556.1 346.7 556.2 346.4 556.5 346.3 556.6 346.1 557.2 345.8 557.3 346.2 556.8 346.6 556.6 346.9 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 570.1 346.3 570.2 346.8 570 346.7 569.5 346.8 569.1 346.9 569 346.7 569.3 346.5 569.7 346.2 569.7 346 569.3 345.8 569.1 345.2 569 344.6 568.6 344.2 568.6 344 568.1 343.5 568.4 343.2 568.8 343.6 568.8 344.1 569 344.4 569.1 344.9 569.4 345.4 569.8 345.7 569.9 346 570.1 346.3 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 559.8 340.8 560.1 341 559.5 341.3 559.2 341.2 559 341.4 558.5 341.3 558.7 341 559.1 340.8 559.8 340.8 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 555.6 340.3 556 340.1 556.3 340.4 556.2 340.6 556.3 340.8 556.1 341.2 556.4 341.5 556.6 342.4 556.8 342.7 557.2 343.2 557 343.9 557.1 344.5 556.9 344.8 556.6 344.9 556.2 345.3 555.9 345.5 555.6 345.5 555.3 345.7 555 345.7 555 345.3 554.7 345.1 554.8 344.5 554.5 344.8 554.3 344.7 553.7 344.3 553.4 344 553.2 343.7 553.9 343.4 554.4 344.1 554.5 343.5 554.2 343.4 554.1 343.1 554.2 342.8 554.8 342.2 555 341.8 554.9 341.7 555.2 341.3 555.2 340.8 555 340.1 555.1 340 555.4 340 555.6 340.3 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 563.7 337.7 563.8 337.9 564.1 338.3 564.9 339 565.4 339.1 565.5 339.2 565.7 339.6 566 340 566.5 340.4 566.5 340.6 566.3 341.4 566.2 341.6 566.2 341.9 566.1 342.4 565.9 342.7 565.8 343.4 565.7 343.5 565.5 342.9 565.1 342.6 565.2 342.4 565.7 342.5 565.9 342.3 565.8 342.1 565.9 341.7 566.2 341.3 566.3 340.8 566.3 340.5 565.8 340.1 565.4 339.4 565.1 339.2 564.5 338.9 564.2 338.6 563.6 338.4 563.2 338.6 563.6 337.7 563.7 337.7 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 554.9 330.2 555.4 330.4 555.5 330.4 556.2 330.5 556.4 330.3 556.6 330.4 557.1 330.4 557.5 330.2 557.9 330.2 558.2 330 558.3 330.5 558.2 330.7 557.9 330.7 557.5 330.7 556.4 330.9 556.1 330.9 554.6 331.3 553.9 331.7 553.5 331.7 553.3 331.6 553 331.3 552.5 330.7 553.1 331 553.2 331.2 553.7 331.2 554.2 331 554.6 330.4 554.3 330.3 554.5 330 554.6 329.7 554.9 330.2 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 559.2 328.9 560 329.1 560.2 329 560.6 329.3 561.5 330.3 561.7 330.9 562.1 331 562.8 331.5 562.8 331.7 562.6 332.2 562.8 332.9 562.4 332.9 561.9 333.3 561.8 333.5 561.5 334.5 561.4 335.4 561.2 335.6 560.9 335.4 560.8 335 560.4 334.9 560.7 334.4 560.9 334.4 561.4 334 561.3 333.6 561.5 333.2 561.5 332.9 561.7 332.6 561.7 332 561.9 331.9 562.1 331.6 562.2 331.3 561.9 331.2 561.4 331.1 561.3 330.8 561.3 330.6 560.9 330.4 560.9 330.1 560.6 329.4 560.4 329.3 560.1 329.4 559.6 329.3 559.3 329.3 558.7 328.9 559.2 328.9 Z"
            id="BS"
            name="Bahamas"
            fill={visitedCountries.includes('BS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M635.2 387l-0.1-0.3 0.3 0.1-0.2 0.2z"
            id="BL"
            name="Saint-Barthélemy"
            fill={visitedCountries.includes('BL') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M637.3 294l-0.3 0-0.1 0.1 0.1 0.2-0.4 0.2-0.1-0.1 0.2-0.1 0.1 0 0.1-0.3 0.3-0.1 0.1 0.1z"
            id="BM"
            name="Bermuda"
            fill={visitedCountries.includes('BM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M651.5 418l-0.6-0.2-0.1-0.5 0-0.8 0.2-0.4 0.2 0.2 0.2 0.6 0.5 0.3 0.1 0.4-0.5 0.4z"
            id="BB"
            name="Barbados"
            fill={visitedCountries.includes('BB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1233.2 581.3 1232.3 581.2 1232.1 580.8 1232.1 580.5 1232.6 580.6 1233.3 581.1 1233.2 581.3 Z"
            id="KM"
            name="Comoros"
            fill={visitedCountries.includes('KM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1236.9 579.4 1237.1 580.4 1237.1 581.1 1237 581.3 1236.8 581 1236.4 580.7 1236.3 580.5 1236 580.4 1235.4 580 1235.5 579.9 1236 580.1 1236.3 580 1236.5 579.6 1236.5 579.4 1236.8 579.3 1236.9 579.4 Z"
            id="KM"
            name="Comoros"
            fill={visitedCountries.includes('KM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1231.2 578.4 1230.7 578 1230.4 577.9 1230.1 577.7 1229.9 577.1 1230 576.8 1230 576.6 1230.2 575.4 1230.1 575.3 1230.3 574.9 1230.8 574.8 1231 575.1 1230.8 576.3 1230.9 576.6 1231.1 577 1231.2 577.5 1231.4 578.1 1231.2 578.4 Z"
            id="KM"
            name="Comoros"
            fill={visitedCountries.includes('KM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 847.8 406.5 847.6 406.8 847.4 406.6 847.4 406.3 847.7 406.2 847.8 406.5 Z"
            id="CV"
            name="Cape Verde"
            fill={visitedCountries.includes('CV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 849.7 406.6 849.5 406.7 849.1 406.6 848.8 406.3 848.7 406 848.9 405.6 849.4 405.3 849.8 405.3 850 406 849.9 406.4 849.7 406.6 Z"
            id="CV"
            name="Cape Verde"
            fill={visitedCountries.includes('CV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 853.2 403.5 853.4 403.6 853.4 403.8 853.6 404 854 404.5 854.2 404.5 854.4 404.8 854.6 405.3 854.8 405.5 854.5 406 854.2 406.1 853.7 406 853.4 405.9 853.1 405.6 853.1 405.4 852.9 405.3 852.8 404.9 852.9 404.7 852.9 404.4 853.1 404 852.9 403.5 853.2 403.5 Z"
            id="CV"
            name="Cape Verde"
            fill={visitedCountries.includes('CV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 856.3 403.5 856.6 403.6 856.7 404.2 856.6 404.6 856.2 404.8 855.8 404.4 856 404 855.9 403.8 856.3 403.5 Z"
            id="CV"
            name="Cape Verde"
            fill={visitedCountries.includes('CV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 858.3 397.8 858.6 397.6 859.1 397.8 859.2 398 859.2 398.7 858.8 399 858.5 399.2 858.2 399.2 857.7 399 857.7 398.5 857.9 398.3 857.9 397.7 858 397.6 858.3 397.8 Z"
            id="CV"
            name="Cape Verde"
            fill={visitedCountries.includes('CV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 850.3 395 850.7 394.9 851 395.1 851.4 395.1 851.7 395.3 851.8 395.5 851.3 395.5 850.6 395.2 850.4 395.3 850.1 395.9 849.8 395.3 849.7 395.2 849.6 394.8 849.9 394.7 850.3 395 Z"
            id="CV"
            name="Cape Verde"
            fill={visitedCountries.includes('CV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 858.1 394.5 858.2 394.6 858.1 395.2 857.9 395.3 857.9 394.8 857.7 394.5 857.7 394.2 857.6 393.9 858 393.6 858.2 393.8 858.1 394.4 858.1 394.5 Z"
            id="CV"
            name="Cape Verde"
            fill={visitedCountries.includes('CV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 846.8 393.2 847 393.5 847.1 393.8 846.4 394.1 846.1 393.9 845.9 393.7 846.3 393.3 846.8 393.2 Z"
            id="CV"
            name="Cape Verde"
            fill={visitedCountries.includes('CV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 846 391.4 846.3 391.5 846.3 391.7 846.6 392 846.4 392.4 845.8 392.7 845.4 393.1 844.7 393.2 844.7 393.1 844.7 392.6 844.5 392.4 844.5 392.2 844.7 392 844.9 392 845.1 391.8 845.8 391.4 846 391.4 Z"
            id="CV"
            name="Cape Verde"
            fill={visitedCountries.includes('CV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M599 424.5l-0.3 0-0.4-0.3-0.3-0.1-0.3-0.3-0.1-0.2-0.3-0.1-0.2-0.4-0.3-0.3 0.1-0.5 0.5 0.3 0.1 0.5 0.4 0.4 0.7 0.2 0.2 0.3 0.3 0.4-0.1 0.1z"
            id="CW"
            name="Curaçao"
            fill={visitedCountries.includes('CW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 532.7 377.8 533 377.9 533.2 377.5 533.6 377.6 534.1 377.6 534.2 377.8 534 378 533.8 377.9 533.4 378 533.2 378.1 532.5 378.1 532.7 377.8 Z"
            id="KY"
            name="Cayman Islands"
            fill={visitedCountries.includes('KY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 540.8 375.3 540.1 375.6 540.3 375.3 540.8 375.3 Z"
            id="KY"
            name="Cayman Islands"
            fill={visitedCountries.includes('KY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 541.4 375.4 541.3 375.3 542.1 375 541.9 375.3 541.4 375.4 Z"
            id="KY"
            name="Cayman Islands"
            fill={visitedCountries.includes('KY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1168.2 276.7 1168.3 276.9 1168.6 277.3 1168.2 277.2 1167.9 277.2 1167.5 277.4 1167.2 277.1 1167.2 276.8 1167.5 276.7 1167.7 276.8 1168.2 276.7 Z"
            id="CY"
            name="Cyprus"
            fill={visitedCountries.includes('CY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1166.5 277.2 1166.5 277.3 1166.3 277.5 1166.2 278.1 1166.1 278.3 1165.8 278.3 1165.6 278.5 1165.1 278.7 1164.9 278.8 1164.3 279.1 1163.9 279 1163.4 279.1 1163.1 279.5 1162.9 279.2 1162.6 279.3 1162.4 279.3 1162.1 279 1161.7 279.3 1161.2 279.3 1160.7 279.1 1160.2 279 1159.8 278.7 1159.5 278.1 1159.2 277.8 1159 277.1 1158.8 276.8 1158.9 276.5 1159.4 276.8 1159.8 276.7 1160 276.4 1160.1 276.1 1160.4 276 1160.6 276.1 1160.8 275.9 1161 275.9 1161.1 276.3 1161.6 276.5 1161.7 276.7 1162.3 276.7 1162.9 276.2 1163.3 276.3 1163.6 276.1 1163.9 276.2 1164.3 276.4 1164.5 276.1 1164.8 276.1 1165.1 276.5 1165.1 277.1 1165.4 276.9 1165.7 277.1 1165.8 277 1166.5 277.2 Z"
            id="CY"
            name="Cyprus"
            fill={visitedCountries.includes('CY') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M642 401.7l0.5 0.1 0.2 0.5 0 0.6-0.1 0.8-0.1 0.2-0.2 0.1-0.4 0.2 0.1-0.4-0.1-0.2-0.1-0.7-0.3-0.5 0-0.3 0.1-0.3 0-0.3 0.2 0 0.2 0.2z"
            id="DM"
            name="Dominica"
            fill={visitedCountries.includes('DM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 697.4 836.2 697.8 836.1 697.8 836.5 697 836.2 697.3 835.9 697.5 835.8 697.4 836.2 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 696.7 834.8 696.9 835 697.3 835.1 697.4 835.5 697.1 835.6 697 835.2 696.8 835 696.7 834.8 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 702.9 834 703.1 834.1 703 834.5 702.7 834.4 702.5 834.1 702.8 833.9 702.9 834 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 690.8 833.1 690.8 833.3 690.9 833.6 690.5 833.7 690.2 833.6 690 833.4 689.7 833.3 689.6 832.9 689.8 832.9 689.9 832.7 690.2 832.6 690.4 832.7 690.1 833 690.4 833.1 690.7 832.8 690.8 833.1 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 693.7 831.8 693.3 831.6 692.8 831.3 692 831 692.1 830.6 691.4 830.5 691.1 830.4 690.8 830 691 829.9 691.8 830.2 692.6 830.6 693.1 830.7 693.5 830.8 693.8 830.5 693.9 830.2 694.1 830.3 694.5 830.1 694.6 830.3 695.1 830.3 695.1 830.6 695.4 830.6 696.3 830.4 696.4 830.6 696.7 830.6 697.1 830.5 696.8 830.3 696.7 830 697.1 830 697.7 830.2 697.8 830.6 697.4 831.1 697.5 831.4 697.3 831.6 696.9 831.6 696.6 832.4 696.3 832.7 696 833.3 695.9 833.6 695.4 833.9 695.3 833.7 694.9 833.7 694.9 834 694.1 833.9 694 834 694.3 834.4 694.2 834.5 694 834.9 693.6 834.9 693.3 835.3 693 835.4 692.8 835.4 692.6 835.1 692.2 834.8 692.2 834.6 691.7 834.6 692.3 835 691.9 835 691.4 834.7 691.2 834.6 690.8 834.4 690.5 834.2 690.5 834 691.2 834.2 691.8 834 691.3 833.8 691.2 833.7 692.1 833.7 692.5 833.8 692.8 834 692.8 833.8 693.2 833.7 693.3 833.4 692.9 833.2 692.7 832.7 692.8 832.5 693.4 832.5 693.6 832.6 694 832.5 693.9 832.2 693.1 832.2 693.1 832.3 692.7 832.5 692.1 832.5 691.6 832.2 691.6 831.9 692.3 832.1 692.9 831.9 693.2 831.9 693.7 831.8 694.1 832 694.1 831.9 693.7 831.8 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 695.3 829.9 695.6 829.9 695.9 830.2 695.6 830.3 695.3 830.3 695.3 829.9 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 694.3 829.9 694 829.9 693.9 829.6 694.3 829.7 694.3 829.9 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 692.9 829.7 693.5 829.6 693.7 829.9 693.4 830.3 693.2 830.2 692.9 830.3 692.6 830.1 692.9 829.9 693.2 830.1 693.3 829.9 692.8 829.8 692.9 829.7 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 700.1 829.8 700.7 829.8 700.8 829.7 701.3 829.6 701.7 829.8 702.1 830.1 702.2 830.4 702.2 830.5 701.7 830.6 701.5 830.3 701.3 830.2 701.2 830.5 701.4 830.6 701.5 830.9 701.8 830.7 702 830.8 702.1 831.2 702.4 831.3 702.5 831.2 703 831.5 703.1 831.1 702.3 830.9 702.4 830.4 702.7 830.2 704.2 830.1 704.9 830.7 705.1 830.8 705.1 831.2 704.5 831.1 704 830.9 703.4 831.1 703.7 831.3 704.1 831.4 705 831.5 705.3 831.6 705.4 831.8 705.2 832.3 704.7 832.3 704.6 832.4 703.9 832.5 703.4 832.7 703.7 832.9 702.8 833.3 702.4 833.2 701.9 833.3 701.2 833.3 700.6 833.1 700 832.7 700 833 700.3 833.2 700.9 833.4 701.2 833.7 701.4 833.6 701.8 833.7 702.2 834 702 834.1 702.2 834.6 702 834.6 701.7 834.3 701.3 834.2 700.8 834.6 700.6 834.3 700.3 834.1 700 834.1 699.5 833.9 699.3 834 699.5 834.4 699.8 834.4 700 834.6 699.8 834.7 700.5 835.3 700.3 835.4 699.9 835.2 699.6 835.2 699.3 834.9 699 834.8 698.7 834.7 698.6 835.3 699.1 835.4 699.1 835.7 699 835.9 698.6 835.8 698.5 835.6 698 835.4 697.9 835.2 697.7 835.2 697.3 834.7 697.6 834.3 697.6 834.1 697.2 833.6 697.2 833.4 697.7 833.2 697.6 833 698.1 832.9 698 832.6 698.6 832.2 699.2 832 699.6 832.4 699.6 832.8 699.9 832.7 699.4 832.1 699.5 831.8 698.9 831.6 698.5 831.3 698.6 831.1 699 831.3 699.1 830.8 698.4 830.6 698.5 830.3 698.7 830.4 699 830.2 699.3 830.2 699.5 829.9 699.2 829.6 699.6 829.6 700.1 829.8 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 695.1 829.4 695.8 829.4 696 829.6 696.2 829.4 696.4 829.5 696.6 829.8 696.4 829.9 696 829.8 695.6 829.6 694.8 829.5 694.9 829.3 695.1 829.4 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 688.3 828.3 687.8 828.2 687.9 828 688.3 828.3 Z"
            id="FK"
            name="Falkland Islands"
            fill={visitedCountries.includes('FK') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 955.6 112 956 112.2 956.3 112.2 956.4 112.4 956.4 112.8 956.6 113.1 956.5 113.3 955.9 112.9 955.7 112.5 955.5 112.3 955.3 112 955.6 112 Z"
            id="FO"
            name="Faeroe Islands"
            fill={visitedCountries.includes('FO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 955.9 110.4 956.7 110.6 956.9 110.8 956.8 111.2 956.7 111.3 956.3 110.8 955.8 110.7 955.6 110.3 955.9 110.4 Z"
            id="FO"
            name="Faeroe Islands"
            fill={visitedCountries.includes('FO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 954.62 109.03999999999999 954.7 109.2 955 109.2 955 109.5 954.6 109.5 954.4 109.7 953.8 109.5 953.6 109.4 953.4 109.1 953.9 109 954 108.9 954.5571428571428 108.99285714285715 954.3 108.8 954.5 108 955 108.1 955.3 108.6 955.3 108.7 955.9 108.9 956.2 109.4 956.5 109.6 956.4 110.2 955.9 109.8 955.7 109.6 955.5 109.5 955.4 109.3 955.2 109.1 954.7 109.1 954.62 109.03999999999999 Z"
            id="FO"
            name="Faeroe Islands"
            fill={visitedCountries.includes('FO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 958.3 108.4 958.1 108.2 958.4 108 958.3 108.4 Z"
            id="FO"
            name="Faeroe Islands"
            fill={visitedCountries.includes('FO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 955.9 108.9 955.5 108.7 955.2 108.4 955.1 108.1 955.2 108 955.6 107.9 955.9 107.9 956.5 108.3 956.4 108.5 956.5 108.7 957.1 108.9 957.1 109.1 956.7 109.4 955.9 108.9 Z"
            id="FO"
            name="Faeroe Islands"
            fill={visitedCountries.includes('FO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 958.1 108.3 957.8 108.7 957.5 108.5 957.2 108.5 957.4 108.2 957.3 107.8 957.4 107.7 957.6 108.1 958.1 108.3 Z"
            id="FO"
            name="Faeroe Islands"
            fill={visitedCountries.includes('FO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 957.2 108.3 957 108.3 956.8 107.9 956.9 107.6 957.1 108 957.2 108.3 Z"
            id="FO"
            name="Faeroe Islands"
            fill={visitedCountries.includes('FO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1909.4 467.7 1909.2 468 1908.7 467.9 1908.7 467.7 1909.2 467.3 1909.4 467.7 Z"
            id="FM"
            name="Federated States of Micronesia"
            fill={visitedCountries.includes('FM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1881.2 457.1 1881.6 457.1 1881.9 457.3 1882 457.7 1881.8 457.8 1881.9 458 1881.8 458.2 1881.2 458.2 1881 458 1881 457.8 1880.8 457.5 1880.8 457.2 1881.2 457.1 Z"
            id="FM"
            name="Federated States of Micronesia"
            fill={visitedCountries.includes('FM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1766.5 440.5 1766.6 440.8 1766.3 440.8 1766 441.3 1765.9 441.2 1766.2 440.4 1766.6 440.3 1766.5 440.5 Z"
            id="FM"
            name="Federated States of Micronesia"
            fill={visitedCountries.includes('FM') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M639.2 424.5l-0.4 0.3-0.2-0.1-0.1-0.5 0.2-0.5 0.3-0.4 0.3 0 0.1 0.3-0.1 0.7-0.1 0.2z"
            id="GD"
            name="Grenada"
            fill={visitedCountries.includes('GD') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1800.8 415.5l-0.1 0.4 0 0.6-0.1 0.3-0.3 0-0.2-0.3-0.1-0.5 0-0.5 0.6-0.5 0.1-0.2 0.1-0.5 0.2-0.1 0.1 0.2 0.4 0.1-0.2 0.5-0.5 0.5z"
            id="GU"
            name="Guam"
            fill={visitedCountries.includes('GU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 636.3 392 636 392 635.9 391.8 636.1 391.4 636.3 391.4 636.4 391.6 636.3 392 Z"
            id="KN"
            name="Saint Kitts and Nevis"
            fill={visitedCountries.includes('KN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 635.6 390.5 635.5 390.8 635.3 390.8 634.9 390.6 634.7 390.4 635 390 635.5 390.4 635.6 390.5 Z"
            id="KN"
            name="Saint Kitts and Nevis"
            fill={visitedCountries.includes('KN') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M643.7 413.8l-0.2-0.2-0.4-0.2-0.1-0.2 0-0.6 0.1-0.2 0.7-1.1 0.3 0.2 0 0.7-0.1 0.8-0.1 0.4-0.2 0.4z"
            id="LC"
            name="Saint Lucia"
            fill={visitedCountries.includes('LC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M634.2 386l-0.4-0.1 0.2-0.3 0.3-0.1-0.1 0.5z"
            id="MF"
            name="Saint-Martin"
            fill={visitedCountries.includes('MF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1402.9 474.8l0 0.2-0.2-0.1 0.2-0.2 0 0.1z"
            id="MV"
            name="Maldives"
            fill={visitedCountries.includes('MV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1953.8 456l1 0.4-0.2 0-0.8-0.4z"
            id="MH"
            name="Marshall Islands"
            fill={visitedCountries.includes('MH') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1063.9 271.7 1063.7 272 1063.2 271.8 1062.7 271.5 1062.7 271 1062.6 270.9 1063.2 270.9 1063.6 271.2 1063.8 271.4 1063.9 271.7 Z"
            id="MT"
            name="Malta"
            fill={visitedCountries.includes('MT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1062.3 270.6 1061.8 270.5 1061.8 270.3 1062.2 270.2 1062.6 270.5 1062.3 270.6 Z"
            id="MT"
            name="Malta"
            fill={visitedCountries.includes('MT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1802.5 411.1 1802.4 411.2 1802.2 411.1 1802.1 410.9 1802.6 410.7 1802.8 410.9 1802.5 411.1 Z"
            id="MP"
            name="Northern Mariana Islands"
            fill={visitedCountries.includes('MP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1804 406 1803.8 406 1803.5 405.4 1803.6 405.1 1803.9 405.1 1803.9 405.4 1804.1 405.6 1804 406 Z"
            id="MP"
            name="Northern Mariana Islands"
            fill={visitedCountries.includes('MP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1804.5 404.4 1804.3 404.6 1804.4 404.9 1804 404.9 1804 404.2 1804.1 404 1804.5 403.8 1804.4 404.3 1804.5 404.4 Z"
            id="MP"
            name="Northern Mariana Islands"
            fill={visitedCountries.includes('MP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1802.6 396.9 1802.3 396.9 1802.2 396.7 1802.6 396.7 1802.6 396.9 Z"
            id="MP"
            name="Northern Mariana Islands"
            fill={visitedCountries.includes('MP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1800.7 385.9 1800.6 385.7 1800.6 385.2 1800.9 385.1 1801.1 385.4 1800.7 385.9 Z"
            id="MP"
            name="Northern Mariana Islands"
            fill={visitedCountries.includes('MP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1799.5 381.6 1799.1 381.5 1799.1 381.2 1799.3 381.1 1799.5 381.3 1799.5 381.6 Z"
            id="MP"
            name="Northern Mariana Islands"
            fill={visitedCountries.includes('MP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M638.2 393.9l0.2 0.4 0 0.3-0.2 0.2-0.2-0.1-0.1-0.3 0.3-0.5z"
            id="MS"
            name="Montserrat"
            fill={visitedCountries.includes('MS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1307.7 630.8 1308.1 631.7 1307.9 632.3 1307.5 632.7 1307.6 633 1307.3 633.3 1306.8 633.5 1306.3 633.5 1305.7 633.4 1305.6 633.5 1305.3 633.2 1305.5 633 1305.6 632.6 1305.7 631.9 1305.9 631.5 1306.4 631.1 1306.5 630.9 1306.7 630.4 1307.1 630.1 1307.5 630.2 1307.7 630.8 Z"
            id="MU"
            name="Mauritius"
            fill={visitedCountries.includes('MU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1339.5 628.7 1339.2 628.4 1339.6 628.2 1339.9 628.1 1340.1 628.2 1340 628.4 1339.5 628.7 Z"
            id="MU"
            name="Mauritius"
            fill={visitedCountries.includes('MU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1915.2 646.9 1915 647 1914.8 647.4 1914.4 647.2 1914.6 646.7 1914.7 646.5 1915 646.6 1915.2 646.9 Z"
            id="NC"
            name="New Caledonia"
            fill={visitedCountries.includes('NC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1919.6 639.1 1919.5 639.2 1919.7 639.6 1920 639.6 1920.4 639.4 1920.3 640 1920.1 640.2 1920 640.6 1919.5 640.9 1919.1 640.7 1919.1 640.6 1918.8 640.3 1918.9 640.1 1918.7 639.9 1918.8 639.5 1918.7 639.1 1918.8 639.1 1919.2 639.2 1919.6 639.1 Z"
            id="NC"
            name="New Caledonia"
            fill={visitedCountries.includes('NC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1916.9 634.8 1916.7 635.3 1916.7 635.7 1916.5 636 1916.8 636.2 1917 636.3 1917.1 636.5 1917 636.7 1917.3 637.1 1917.1 637.1 1916.9 637.6 1916.7 637.8 1916.4 637.7 1916.2 637.4 1916.1 637.2 1915.5 637.1 1915.2 636.6 1915.2 636.4 1915.1 636.1 1915.4 636.1 1915.7 635.9 1916.1 635.6 1916.2 635.3 1915.8 635.1 1915.4 635.2 1915.6 634.8 1915.9 634.7 1916.1 634.8 1916.5 634.5 1916.9 634.8 Z"
            id="NC"
            name="New Caledonia"
            fill={visitedCountries.includes('NC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1913.5 633.2 1913.2 633.8 1913.1 634.1 1913.4 634.1 1912.9 634.6 1912.7 634.8 1912.6 634.6 1912.9 634.2 1913.1 633.7 1913.5 633.2 Z"
            id="NC"
            name="New Caledonia"
            fill={visitedCountries.includes('NC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1913.5 633.2 1913.3 632.8 1913.7 632.8 1913.8 633.2 1913.5 633.2 Z"
            id="NC"
            name="New Caledonia"
            fill={visitedCountries.includes('NC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1899.6 630.8 1899.8 630.9 1900.3 631.8 1900.6 632.1 1900.9 632 1901.1 631.7 1902 632.2 1902.3 632.7 1903 633.3 1903.3 633.7 1903.4 634 1903.8 634.4 1903.9 634.6 1904.1 634.6 1904.4 634.9 1905.3 635.1 1905.4 635.4 1905.4 635.8 1905.7 636.2 1906.1 636.3 1905.8 636.8 1905.9 637 1906.3 637.5 1906.4 637.5 1906.8 638 1906.7 638.4 1907.4 638.6 1907.8 639.1 1908.1 639.1 1908.4 639.3 1908.9 639.7 1908.8 640 1909.1 640 1909.5 640.5 1910.1 640.9 1910.1 641.1 1910.4 641.2 1910.7 641.5 1910.7 641.7 1911 642.3 1911.4 642.7 1911.5 642.6 1911.9 643.2 1912.4 643.3 1912.7 643.6 1912.7 644 1912.8 644.4 1912.9 644.5 1912.7 645.1 1912 645.5 1911.9 645.2 1911.6 645.3 1911.3 645.6 1910.7 644.8 1910.3 644.8 1910.2 644.6 1910 644.6 1909.8 644.9 1908.9 644 1908.7 644 1908.3 643.5 1908.4 642.7 1908.1 642.7 1907.7 642.7 1907.4 642.5 1907.3 642.3 1907.1 642.2 1906.8 642.2 1906.8 641.9 1906.6 641.4 1906.2 641.5 1905.4 641 1905.3 640.8 1905.3 640.5 1905 640.7 1904.4 640.4 1904.3 640 1903.9 639.7 1903.7 639.2 1903.2 639.1 1903.4 638.9 1903.1 638.6 1902.8 638.5 1902.5 637.8 1902.5 637.4 1902.3 637.1 1902 637.1 1901.8 636.5 1901.9 636.3 1901.2 635.9 1900.9 635.7 1900.5 635.1 1900.8 634.9 1900.6 634.7 1900.4 634.4 1900.4 633.9 1899.9 633.6 1899.9 633 1899.7 632.7 1900 632.7 1900.1 632.4 1900 632.2 1899.4 632.2 1899.2 631.9 1899.7 631.2 1899.4 630.9 1899.6 630.8 Z"
            id="NC"
            name="New Caledonia"
            fill={visitedCountries.includes('NC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1900.7 631.1 1900.4 631 1900.5 630.6 1900.7 631.1 Z"
            id="NC"
            name="New Caledonia"
            fill={visitedCountries.includes('NC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1898.4 628.7 1898.2 628.9 1898.1 628.5 1898.3 628.3 1898.4 628.7 Z"
            id="NC"
            name="New Caledonia"
            fill={visitedCountries.includes('NC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1933 505.3l-0.2 0-0.1-0.3 0.3 0 0 0.3z"
            id="NR"
            name="Nauru"
            fill={visitedCountries.includes('NR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1747.7 453.1l-0.2 0.4 0.1 0.1-0.2 0.6 0.1 0.2-0.5 0.2-0.2-0.7 0.3-0.2-0.2-0.2 0.3-0.6 0.3-0.1 0.2 0.3z"
            id="PW"
            name="Palau"
            fill={visitedCountries.includes('PW') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 607.1 385.9 606.8 385.7 606.9 385.5 607.2 385.5 607.3 385.6 607.1 385.9 Z"
            id="PR"
            name="Puerto Rico"
            fill={visitedCountries.includes('PR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 621.7 385.4 621.5 385.4 620.6 385.7 620 385.7 620.2 385.5 620.6 385.3 621 385.2 621.6 385.3 621.7 385.4 Z"
            id="PR"
            name="Puerto Rico"
            fill={visitedCountries.includes('PR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 612.2 383 612.8 383.1 613.4 383.1 613.7 383.2 614.3 383.1 614.6 383.2 615 383.1 615.2 383.2 615.7 383.1 616.1 383.2 616.4 383.2 617.2 383.4 617.2 383.2 617.8 383.4 617.9 383.3 618.7 383.4 618.9 383.6 619.1 383.6 619.7 383.9 619.9 383.8 619.8 384.5 620 384.8 619.1 385.1 618.8 385.5 618.5 386.1 618.2 386.3 617.9 386.4 617.5 386.4 616.9 386.5 616.6 386.7 615.9 386.6 615.7 386.4 615.2 386.6 614.9 386.3 614.2 386.5 613.3 386.4 613 386.5 612.4 386.6 612.2 386.7 612 386.5 611.6 386.4 611.3 386.6 610.7 386.5 611 385.8 611 385.4 611.2 385 611 384.4 610.8 384.3 610.7 383.9 611.1 383.7 611.3 383.6 611.3 383.1 611.7 382.9 612.2 383 Z"
            id="PR"
            name="Puerto Rico"
            fill={visitedCountries.includes('PR') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 195.3 679.3 195.2 679.2 195 678.9 195.1 678.7 195.4 678.9 195.3 679.3 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 205.6 641.2 205.5 641.3 205.2 641.1 205.4 640.9 205.6 641.2 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 199.4 616.5 199.2 616.4 199.4 615.8 199.9 615.4 200.2 615.4 200.2 615.6 200 616 199.4 616.5 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 151.7 615.5 152.4 615.7 152.7 616.1 152.7 616.4 152.5 616.5 152 616.4 151.6 615.8 151.5 615.6 150.9 615.8 150.7 615.8 150.1 615.7 149.9 615.3 149.6 614.8 149.6 614.5 149.7 614.3 150.2 614.2 150.7 614.2 151.2 614.4 151.4 614.8 151.5 615.4 151.7 615.5 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 148.7 614 148.5 614.6 148 614.4 148.1 614.1 148.6 613.9 148.7 614 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 141.1 609.7 140.9 609.8 140.7 609.5 141 609.4 141.1 609.7 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 139 610.1 138.7 610.3 138.4 610.3 138.2 609.5 138.4 609.3 139.1 610.1 139 610.1 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 138 608.3 138.2 608.4 138.2 608.9 137.8 608.7 137.7 608.4 138 608.3 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 166.3 605.4 166 605.5 166.1 605.2 166.3 605.4 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 204.3 569.5 204 569.5 204 569.1 203.8 568.8 204.2 568.9 204.3 569.3 204.3 569.5 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 201.2 566 201 566 201 565.6 201.2 565.3 201.5 565.5 201.3 565.7 201.2 566 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 202.4 564.4 202.4 564.7 202 564.8 201.4 564.8 201.4 565.1 201 565 200.8 564.8 200.7 564.5 201.4 564.1 201.7 564.1 201.9 564.3 202.4 564.4 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 195.5 561.8 195.5 562.2 195.5 562.4 195.2 562.4 194.9 562 195.2 561.7 195.5 561.8 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 197.9 558.8 198.2 558.9 198.3 559 197.7 559.2 197.6 558.9 197.9 558.8 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 194.2 558.2 195.1 558.3 195.4 558.6 195.4 558.8 195 559.1 194.2 559.1 194.1 558.6 194 558.2 194.2 558.2 Z"
            id="PF"
            name="French Polynesia"
            fill={visitedCountries.includes('PF') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1926.8 576.2 1927.1 576.4 1927 576.8 1927.3 576.8 1927.3 577 1926.5 577 1926.2 576.5 1926.4 576.2 1926.8 576.2 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1888.5 575.6 1888.7 575.6 1889.7 576.4 1890.2 576.7 1891.1 577.4 1891 577.7 1890.8 577.7 1890.6 577.9 1890.4 577.6 1890.3 577.6 1890.1 577.4 1890 577 1889.6 576.9 1889.6 576.6 1889.3 576.5 1889.2 576.6 1889 576.6 1888.1 576.2 1887.9 575.8 1888.2 575.4 1888.5 575.6 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1925.4 574.1 1925.2 574.4 1924.9 574.2 1924.9 574 1925.2 573.8 1925.4 574.1 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1923.1 570.2 1923.2 570.3 1923.5 570.3 1923.4 570.7 1922.9 570.9 1922.6 570.9 1922.2 571 1921.8 571.6 1921.7 571.3 1921.4 571.4 1921.2 571.2 1921.2 570.9 1921.7 570.8 1921.7 570.6 1922 570.2 1922.7 570.3 1923.1 570.2 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1896.8 567.4 1897.1 567.3 1897.7 567.6 1898.2 568.1 1898.5 568.4 1898.7 568.4 1898.9 568.6 1899.1 568.6 1899.4 568.9 1899.7 568.8 1900.1 568.9 1900.3 569.1 1900.7 569.1 1901 569 1901.2 569.3 1901.4 570.1 1901.7 570.4 1901.7 570.9 1901.5 571.1 1901.6 571.4 1901.2 571.2 1900.9 571.4 1900.6 571.3 1900.1 571 1899.9 571 1899.3 570.8 1898.9 570.7 1898.7 570.4 1898.4 570.2 1898.1 570.1 1897.9 569.8 1897.5 569.6 1897.7 569.2 1897.6 568.8 1897.6 568.4 1897.4 568.3 1896.8 568.1 1896.5 568.2 1896.4 568 1896.5 567.7 1896.6 567.4 1896.8 567.4 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1900.8 564 1900.7 564.2 1900.7 564.9 1900.5 564.7 1900.5 564.2 1900.8 564 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1897.9 562.2 1898.2 563.1 1898.4 563.5 1898.4 563.9 1898.5 564.4 1898.3 564.7 1897.9 564 1897.8 564.3 1897.5 563.8 1897.6 562.8 1897.7 562.6 1897.7 562.3 1897.9 562.2 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1889.5 562.4 1889.8 562.4 1890.1 562.3 1890.5 562.4 1890.6 562.3 1891.1 562.3 1891.9 562.3 1892.1 562.6 1892.4 562.7 1892.6 563 1892.8 563 1893 563.1 1893.4 563.5 1893.4 564.1 1893.6 564.1 1894 564.3 1894.1 564.6 1894.1 565.2 1894 565.3 1893.3 565.5 1893.1 565.6 1892.7 565.5 1892.3 565.3 1891.9 565.3 1891.8 565.1 1891.3 564.8 1890.7 564.8 1890.2 564.9 1889.7 564.9 1889.2 564.8 1888.9 564.6 1888.6 564.7 1888.3 564.3 1888 564.1 1887.7 563.3 1887.5 562.9 1887.7 562.7 1887.6 562.5 1887.6 561.8 1887.7 561.5 1888.3 561.2 1888.7 561.4 1889.1 561.9 1889.2 562.2 1889.5 562.4 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1891.8 560 1892.3 560.5 1892 560.8 1891.7 560.6 1891.7 560.5 1891.8 560 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1891.8 560 1891.6 560.4 1891.5 560.4 1891.1 560.1 1890.8 560.2 1890.6 560.1 1890.5 559.9 1890.8 559.8 1891 559.6 1891.5 559.7 1891.8 560 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1885.2 559.5 1885.3 559.7 1885.5 559.8 1885.3 560.2 1884.9 560.4 1884.6 560 1885.2 559.5 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1876.7 557.7 1876.9 558 1876.8 558.3 1876 557.9 1876.5 557.6 1876.7 557.7 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1880.1 558.5 1879.8 558.3 1879.9 558 1880.2 557.7 1880.2 558.2 1880.3 558.4 1880.1 558.5 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1879.2 556.7 1879.4 556.6 1879.8 556.6 1879.8 556.8 1879.4 557.1 1879.6 557.3 1879.6 557.6 1879.2 558 1879 558.1 1878.7 558 1878.3 557.6 1878.4 557 1878.7 556.9 1878.9 556.5 1879.2 556.4 1879.2 556.7 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1875.6 556.8 1875.4 556.9 1875.2 557.4 1875.6 557.9 1875.1 557.7 1875.1 557.5 1875 557.2 1874.6 556.8 1874.6 556.6 1875 556.4 1875.1 556.1 1875.5 555.8 1875.8 556 1875.8 556.4 1875.6 556.8 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1888.5 556.3 1888.7 556.5 1888.6 556.7 1888.4 556.6 1887.8 556.1 1888 555.7 1888.3 555.6 1888.5 555.8 1888.4 556.1 1888.5 556.3 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1895 555.5 1895.4 556.3 1896 557.1 1896 557.4 1895.6 557.6 1895.6 558.1 1895.6 558.4 1895.7 558.6 1895.9 558.6 1896.1 558.9 1896.6 559.3 1896.7 559.8 1896.8 560.1 1897 560.3 1896.8 560.5 1897.1 560.8 1897 560.9 1897.1 561.4 1896.9 561.6 1897.2 561.9 1897.3 562.4 1897.5 562.9 1897.5 563.5 1897.4 563.6 1897.1 563.3 1896.8 562.8 1896.8 562.5 1896.5 562.1 1896.1 561.8 1895.8 561.5 1895.3 560.9 1894.9 560.6 1894.6 559.7 1894.4 558.7 1894.2 558 1894.2 557.5 1894.1 557.1 1894.5 556.7 1894.4 556.4 1893.9 555.7 1893.8 555.4 1893.9 555.3 1894.3 555.4 1894.5 555.5 1894.8 555.2 1895 555.5 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1874.3 555.2 1874.1 554.8 1873.8 554.5 1874.2 554.5 1874.3 555.2 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1874.2 554.2 1874.6 554.3 1874.7 554.4 1874.8 554.9 1874.6 554.9 1874.4 554.5 1874.2 554.2 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1877.3 554.4 1877.2 554.7 1877.4 554.7 1877.9 554.7 1878.3 555.4 1878.3 555.6 1878.5 555.9 1878.6 556.4 1878.4 556.6 1878.4 556.9 1877.8 556.7 1877.6 556.5 1877.3 556.5 1876.9 556.2 1876.8 556 1876.7 555.7 1877.1 555.8 1876.8 555 1876.7 554.8 1876.2 554.9 1876 555 1875.6 555 1875.3 555.4 1874.9 555.2 1874.9 554.6 1875.1 554.4 1875.5 554.4 1875.5 554 1875.9 553.4 1876.3 553.1 1876.6 552.9 1877 553.2 1877.2 553.6 1877.1 554.3 1877.3 554.4 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1871.4 554.4 1871.3 554.4 1871.1 553.6 1871.2 553.3 1871.2 552.9 1871.4 553 1871.5 553.4 1871.5 554.1 1871.4 554.4 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1874.8 553.9 1874.5 554.1 1874.4 554 1874 554 1873.7 553.7 1873.6 553.4 1873.5 553.1 1873.6 552.8 1873.9 552.4 1874.4 552.2 1874.6 552.4 1874.9 552.9 1874.9 553.5 1874.8 553.9 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1871.8 550.4 1872.2 550.9 1872.2 551 1872.9 551.4 1872.8 551.7 1872.2 552.4 1872.2 552.7 1871.9 552.8 1871.9 552.4 1871.7 552.4 1871.7 552 1871.5 551.6 1871.2 551.4 1871.1 551.1 1871.2 550.8 1871.4 550.6 1871.6 550.4 1871.8 550.4 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1882.1 550.5 1882.4 550.7 1882.2 550.8 1881.7 550.9 1881.6 550.6 1881.8 550.4 1882.1 550.5 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1883 550.5 1883.2 550.4 1883.7 550.7 1884 550.8 1884.2 551 1884.5 551.5 1884.8 551.6 1885.1 551.9 1885.1 552.2 1885.6 552.3 1885.6 552.6 1885.9 552.7 1886.2 552.6 1886.3 552.7 1886.7 552.9 1886.8 553.1 1887.1 553 1887.4 553.1 1887.5 553.4 1887.9 553.7 1888.2 554 1888.6 554.3 1889.6 555.3 1889.3 555.7 1889.6 556.2 1889.7 556.8 1889.4 556.7 1889.1 556.3 1888.4 555.5 1888 555.4 1887.5 555 1886.9 554.9 1886.8 554.6 1886.2 554.4 1885.7 553.9 1885.5 553.9 1884.7 553.3 1884.2 553 1884.2 552.8 1883.8 552.6 1883.6 552.4 1883.4 552 1883 551.7 1882.9 551.5 1882.9 551.1 1882.5 550.6 1882.3 550.5 1882.3 550.2 1883 550.5 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1881.5 549.9 1881.7 550.1 1881.9 550 1882.2 550.2 1882.1 550.4 1881.8 550.3 1881.5 549.9 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1877 549.3 1877.5 549.3 1877.3 549.5 1877 549.4 1877 549.3 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1881.3 549.3 1881.1 549.8 1881 549.6 1881.3 549.3 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1878.6 549.7 1878.1 549.8 1877.9 549.6 1878.2 549.2 1878.5 549.3 1878.6 549.7 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1866.1 548.8 1866.3 549.1 1866.1 549.3 1865.8 549.2 1865.7 549.1 1866.1 548.8 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1867.6 546.9 1867.9 547.1 1867.8 547.4 1867.1 547.6 1866.8 547.3 1867.1 546.7 1867.3 546.6 1867.6 546.9 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1869.3 546 1869.3 546.5 1869.1 546.3 1869.1 546.1 1869.3 546 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1872.2 544.5 1872.5 544.6 1872.9 545.1 1873.2 545.3 1873.5 545.4 1873.8 545.7 1874.6 546.1 1875 546.6 1875 547 1875.1 547.6 1875.3 547.8 1875.6 548.1 1875.8 548.1 1875.9 548.5 1876.6 548.8 1877 548.7 1877.1 548.8 1877.1 549.1 1876.8 549.2 1876.6 549.5 1876.1 549.3 1875.3 548.9 1874.8 548.9 1874.5 548.5 1873.8 548.1 1873.2 547.1 1872.6 546.1 1872.1 545.8 1871.4 545.1 1871.4 544.6 1871.4 544.4 1871.7 544.2 1872 544.3 1872.2 544.5 Z"
            id="SB"
            name="Solomon Islands"
            fill={visitedCountries.includes('SB') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1023.9 501.3 1023.7 501.3 1023.5 501.6 1023.3 501.6 1023.2 501.2 1023 500.4 1023 500.1 1023.4 499.6 1023.7 499.5 1024 499.2 1024.4 499.3 1024.6 499.7 1024.7 500 1024.6 500.4 1024.4 500.7 1024.1 501.1 1023.9 501.3 Z"
            id="ST"
            name="São Tomé and Principe"
            fill={visitedCountries.includes('ST') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1028.5 491.5 1028.4 491.8 1028.2 491.9 1027.9 491.8 1027.9 491.5 1028.1 491.4 1028.1 491.1 1028.3 490.9 1028.6 491 1028.5 491.5 Z"
            id="ST"
            name="São Tomé and Principe"
            fill={visitedCountries.includes('ST') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M634.2 386l0 0.1-0.4-0.1 0-0.1 0.4 0.1z"
            id="SX"
            name="Sint Maarten"
            fill={visitedCountries.includes('SX') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1249 562.1 1248.7 562.3 1248.2 562.3 1247.8 562.5 1247.4 562.5 1247.4 562.3 1247.9 562.3 1248.3 562.2 1248.7 561.9 1248.9 561.9 1249 562.1 Z"
            id="SC"
            name="Seychelles"
            fill={visitedCountries.includes('SC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1248.5 561.8 1248.3 561.9 1247.9 561.9 1247.9 561.7 1248.5 561.8 Z"
            id="SC"
            name="Seychelles"
            fill={visitedCountries.includes('SC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1300.4 531.5 1300.8 531.9 1300.6 532.2 1300.4 531.9 1300.1 531.7 1300.3 531.2 1300.4 531.5 Z"
            id="SC"
            name="Seychelles"
            fill={visitedCountries.includes('SC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 587.7 361.6 588.4 361.6 588.7 362 588.4 362 588.1 361.9 587.6 362 587.5 361.7 587.7 361.6 Z"
            id="TC"
            name="Turks and Caicos Islands"
            fill={visitedCountries.includes('TC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 585 361.5 585.3 361.9 585.9 361.8 585.7 362 585.1 362 584.7 361.8 585 361.5 Z"
            id="TC"
            name="Turks and Caicos Islands"
            fill={visitedCountries.includes('TC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 587.2 360.9 587.2 361.4 586.7 361.2 586.6 360.9 586.7 360.8 587.2 360.9 Z"
            id="TC"
            name="Turks and Caicos Islands"
            fill={visitedCountries.includes('TC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 14.7 639.5 14.2 639.2 14.2 639 14.5 638.8 14.7 639.5 Z"
            id="TO"
            name="Tonga"
            fill={visitedCountries.includes('TO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 11.9 637.4 12.2 637.4 12.6 637.7 12.9 637.8 13.1 637.4 13.4 637.7 13.1 638 13.2 638.2 13.1 638.4 12.9 638.3 12.6 638 11.9 637.8 11.9 637.4 Z"
            id="TO"
            name="Tonga"
            fill={visitedCountries.includes('TO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 11.1 628.8 10.9 628.9 10.8 628.4 11 628.5 11.1 628.8 Z"
            id="TO"
            name="Tonga"
            fill={visitedCountries.includes('TO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 15.5 621.3 15 621.6 14.8 621.6 14.7 621.5 15 621 15.3 621.1 15.5 621.3 Z"
            id="TO"
            name="Tonga"
            fill={visitedCountries.includes('TO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1.4 602 1.3 602.1 1 602 1.1 601.8 1.4 601.8 1.4 602 Z"
            id="TO"
            name="Tonga"
            fill={visitedCountries.includes('TO') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 642.8 432.2 642.6 432.7 642.3 433.1 642.1 433.2 642 433.6 642.2 434.2 642 434.3 642 435 642.2 435.3 642.4 435.5 642.2 435.7 642.1 436 642.1 436.7 641.9 436.8 641.5 437 641 437.1 640.7 437.1 640.2 437.2 639.7 437.1 639.3 437.2 639 437.1 638.5 437.3 638.1 437.1 637.5 437.1 637.2 437.3 636.9 437.2 637.4 437 637.7 436.7 638.1 436.6 638.5 436.3 638.7 436 639.3 436.1 639.6 435.7 639.4 434.9 639.6 434.5 639.6 434 639.6 433.8 639.3 433.4 639 433.3 638.6 433.2 638.5 433.1 638.9 432.8 640 432.7 640.2 432.5 641.3 432.5 641.4 432.4 642.6 432.2 642.8 432.2 Z"
            id="TT"
            name="Trinidad and Tobago"
            fill={visitedCountries.includes('TD') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 645.2 429 645.1 429.5 644.8 429.6 644.4 429.9 644.2 429.9 643.5 430.3 643.3 430.1 643.6 429.8 644.3 429.3 645.2 429 Z"
            id="TT"
            name="Trinidad and Tobago"
            fill={visitedCountries.includes('TD') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1998.9 556.6l0-0.2 0.1 0 0 0.1-0.1 0.1z"
            id="TV"
            name="Tuvalu"
            fill={visitedCountries.includes('TV') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M642.2 417.4l-0.1 0.1-0.5-0.3 0-0.4 0.2-0.3 0.2-0.5 0.4 0 0.1 0.4-0.1 0.8-0.2 0.2z"
            id="VC"
            name="Saint Vincent and the Grenadines"
            fill={visitedCountries.includes('VC') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M626.1 383.4l-0.4 0.2-0.1 0-0.3 0.2-0.1-0.1 0.1-0.3 0.6-0.1 0.2 0.1z"
            id="VG"
            name="British Virgin Islands"
            fill={visitedCountries.includes('VG') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 624.5 387.8 624.8 388.1 623.7 388.3 623.6 387.8 624.3 387.6 624.5 387.8 Z"
            id="VI"
            name="United States Virgin Islands"
            fill={visitedCountries.includes('VI') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 625.2 384 625 384.2 624.5 384.2 624.5 384 624.8 383.9 625.2 384 Z"
            id="VI"
            name="United States Virgin Islands"
            fill={visitedCountries.includes('VI') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 623.8 383.8 624.2 384.1 624 384.3 623.7 384.1 623.2 384.1 623.4 383.9 623.8 383.8 Z"
            id="VI"
            name="United States Virgin Islands"
            fill={visitedCountries.includes('VI') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1931.8 631.8 1931.3 631.6 1931.5 631.2 1932 631.1 1932.2 631.5 1932.1 631.7 1931.8 631.8 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1930.6 628 1930.4 628 1930.1 627.9 1929.7 627.4 1929.6 627 1929.6 626.6 1929.8 626.4 1929.9 626 1930.2 625.9 1930.6 625.9 1930.4 626.2 1930.4 626.7 1931.1 627.2 1930.8 627.5 1930.6 628 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1930.6 622.1 1930.9 622.1 1931 622.3 1930.5 622.4 1930.6 622.7 1931 622.9 1931.1 623.2 1931 623.6 1930.6 623.7 1930.2 623.4 1929.8 623.4 1929.6 623.2 1929.3 623 1929.4 622.6 1929.4 622.3 1929.6 621.8 1929.9 621.4 1930.4 621.4 1930.6 621.5 1930.5 621.9 1930.6 622.1 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1927.6 614.5 1928.2 614.4 1928.3 614.5 1928.5 615.1 1928.7 615.4 1928.8 615.5 1928.4 616.1 1927.6 616.3 1927.3 616 1927.2 615.5 1926.9 615.4 1926.5 615.7 1926.4 615.6 1926.6 615.2 1927 614.9 1927.4 614.4 1927.6 614.5 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1929.9 610.6 1929.8 610.3 1930.1 610.3 1929.9 610.6 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1928.3 608.2 1928.4 608.7 1928.4 608.9 1928.8 609 1929 609.5 1929.5 609.5 1929.5 609.9 1929.4 610 1929.1 609.7 1928.8 609.6 1928.2 609.8 1927.9 609.7 1927.8 609.5 1927.7 609.1 1927.9 608.6 1928.1 608.3 1928.3 608.2 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1929.2 608 1929.1 608 1929 607.7 1929.2 607.7 1929.2 608 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1929.4 606.6 1929.2 606.8 1928.6 606.8 1928.3 606.9 1928.1 606.7 1927.7 606.6 1927.2 606.2 1927.3 606 1927.8 605.8 1928.2 605.7 1928.6 605.4 1928.7 605.1 1928.9 605.1 1929 605.4 1929 606 1929.5 606.4 1929.4 606.6 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1924.7 605.3 1924.9 605.6 1925.5 606 1926.2 606.7 1926.3 606.8 1926.3 607.2 1926.5 607.5 1926.2 607.7 1925.8 608.1 1925.8 607.9 1925.5 607.8 1925.1 607.8 1924.9 607.9 1924.9 608.1 1924.5 608.3 1924.2 608.2 1924.2 607.5 1924.1 606.9 1924.2 606.3 1924.3 605.8 1924.1 605.3 1923.5 605.6 1923.3 605.4 1923.2 605.1 1923.2 604.8 1923.5 604.5 1923.5 604.1 1923.6 603.8 1923.9 603.7 1924.5 604 1924.4 604.2 1924.6 604.7 1924.5 604.9 1924.7 605.3 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1924.1 602.9 1923.8 602.9 1923.3 602.6 1923.3 602.5 1923.5 602.2 1923.7 602.1 1924.2 602.2 1924.1 602.6 1924.1 602.9 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1923.6 601.9 1924 601.6 1924.1 601.7 1924.2 602 1923.7 602 1923.6 601.9 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1929.3 604.5 1929.1 604.4 1929.2 603.2 1929.1 602.9 1929.2 602.4 1929.5 601.6 1929.6 601.1 1929.8 601.7 1929.7 602 1929.7 602.6 1929.7 603.6 1929.6 604.2 1929.3 604.5 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1928 601.2 1927.3 601.2 1927 601.1 1927 600.9 1927.9 600.2 1928.4 600 1928.9 599.9 1928.9 600.1 1928.6 600.5 1928.4 600.8 1928 601.2 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1929.9 600.5 1929.9 600.7 1929.6 600.7 1929.7 600.4 1929.9 599.1 1929.9 599 1930 597.8 1930.2 597.9 1930.1 599.2 1930.2 599.5 1930.1 600 1929.9 600.5 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1923.6 601.9 1922.7 601.8 1922.1 602.1 1922 602.3 1921.8 602.3 1921.7 601.7 1921.5 601.6 1921.1 600.6 1921.5 599.8 1921.5 599.4 1921.4 599.2 1921.4 597.8 1921.3 597.5 1921.3 597 1921.5 596.7 1921.5 596.4 1921.7 596.1 1921.7 595.9 1922 595.8 1922.1 596.3 1922.3 596.7 1922.5 597 1922.6 598.3 1922.5 599.1 1922.5 599.2 1923.1 599.1 1923.4 598.8 1923.6 598 1923.6 597.8 1923.9 597.6 1924.2 597.7 1924.1 598.1 1924.1 599 1924.4 599.1 1924.4 599.6 1924.2 599.7 1924.5 600.1 1924.3 600.3 1924.3 600.8 1924.5 601.3 1924.4 601.5 1924.1 601.5 1923.6 601.9 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1927.8 592.6 1928.2 592.9 1928.1 593.3 1927.8 593.6 1927.6 593.8 1927 593.8 1927 593.4 1927.1 593 1927.3 592.7 1927.8 592.6 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1928.4 590.7 1928.1 590.9 1927.9 591 1927.9 591.2 1927.7 591.3 1927.7 591 1927.5 590.8 1927.4 590.5 1927.5 590.1 1927.7 590 1928.1 589.8 1928.2 590 1928.3 590.4 1928.3 590.5 1928.4 590.7 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1923.4 586.5 1923.3 586.4 1923.4 585.9 1923.6 586.1 1923.4 586.5 Z"
            id="VU"
            name="Vanuatu"
            fill={visitedCountries.includes('VU') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 21.9 591.3 22.2 591.4 22.5 591.5 22.8 591.7 22.7 592 21.7 592 21.4 591.9 21.1 592 20.9 591.9 20.5 591.7 20.2 591.8 19.9 591.6 19.7 591.4 19.1 591.1 19.2 590.7 19.6 590.5 20 590.5 20.5 590.5 21.4 590.9 21.9 591 21.9 591.3 Z"
            id="WS"
            name="Samoa"
            fill={visitedCountries.includes('WS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 17.4 588.5 18 589.1 18.2 589.8 18.1 590.1 18.2 590.4 17.9 590.4 17.6 590.2 17.3 590.4 16.4 590.5 16.1 590.2 15.9 589.8 15.7 589.7 15.4 589.4 14.9 589 14.7 588.8 14.7 588.6 15.1 588.7 15.4 588.6 16 588.4 16.4 588.4 16.9 588.3 17.2 588.3 17.4 588.5 Z"
            id="WS"
            name="Samoa"
            fill={visitedCountries.includes('WS') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M602 424.6l-0.2 0-0.1-0.5 0.1-0.3-0.1-0.3-0.4-0.1-0.3-0.3 0.1-0.3 1.2 0.6-0.1 0.2 0 0.4-0.2 0.2 0 0.4z"
            id="BQ"
            name="Netherlands"
            fill={visitedCountries.includes('BQ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M634.3 389.6l-0.2 0.1 0-0.2 0.1-0.1 0.1 0.2z"
            id="BQ"
            name="St. Eustatius (Netherlands)"
            fill={visitedCountries.includes('BQ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M632.8 388.7l-0.1 0 0.1-0.2 0.1 0.1-0.1 0.1z"
            id="BQ"
            name="Saba (Netherlands)"
            fill={visitedCountries.includes('BQ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M644 406.9l0 0.2 0.4-0.1-0.2 0.5 0.2 0.2 0 0.2 0.2 0.2 0.2 0.9-0.3 0.3-0.1-0.4-0.1 0.1-0.6-0.1-0.4 0-0.2-0.3 0.6-0.5-0.4 0-0.4-0.4-0.1-0.5-0.2-0.5 0.3-0.4 0.4 0.1 0.5 0.3 0.2 0.2z"
            id="MQ"
            name="Martinique"
            fill={visitedCountries.includes('MQ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 888.4 323.4 888.1 323.9 887.7 324.4 887.4 324 887 324 886.8 323.8 887 323.5 887.4 323.6 887.8 323.2 888.1 323 888.3 323.1 888.4 323.4 Z"
            id="ES"
            name="Canary Islands (Spain)"
            fill={visitedCountries.includes('ES') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 902 321.1 902 321.6 902.2 322 902 322.7 902.1 323 901.7 323.4 901.2 323.6 901 323.8 900.4 323.6 899.9 323.1 899.7 322.7 899.7 322.1 900.3 321.7 900.4 321.2 900.4 321 901 321.1 901.4 321.1 901.7 321.2 902 321.1 Z"
            id="ES"
            name="Canary Islands (Spain)"
            fill={visitedCountries.includes('ES') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 892.1 321.9 891.9 321.9 891.6 321.7 891.4 321.4 891.5 321 891.6 320.7 891.9 320.7 892.2 320.7 892.7 321.1 892.8 321.4 892.3 321.9 892.1 321.9 Z"
            id="ES"
            name="Canary Islands (Spain)"
            fill={visitedCountries.includes('ES') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 898.2 318.4 898.2 318.6 897.6 318.9 897.2 319.4 896.9 319.6 896.9 320 896.5 320.7 896.4 321.1 895.9 321.7 895.8 321.9 895.6 321.9 895 322.1 894.9 322 894.8 321.6 894.5 321.2 894.4 321 894.2 320.7 894.2 320.4 893.8 319.8 894.3 319.5 894.6 319.7 895.2 319.5 895.6 319.5 896.1 319.3 896.6 318.9 896.6 318.7 897.2 318.4 897.8 318.4 898.1 318.3 898.2 318.4 Z"
            id="ES"
            name="Canary Islands (Spain)"
            fill={visitedCountries.includes('ES') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 908.4 321.2 908.1 321.6 907.7 321.7 907.4 321.6 907 321.6 907 321.4 907.3 321.4 907.9 321.2 908.3 320.9 908.6 320.6 908.7 320.1 908.8 319.8 909 319.3 909.3 318.9 909.6 318.3 909.8 317.5 910 317.3 910.4 317.2 910.7 317.5 910.8 318 910.7 318.5 910.6 319 910.6 319.5 910.5 319.6 910.2 320.3 909.9 320.6 909.3 320.7 908.6 321 908.4 321.2 Z"
            id="ES"
            name="Canary Islands (Spain)"
            fill={visitedCountries.includes('ES') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 888.8 316.7 889.1 316.6 889.3 316.9 889.5 317.4 889.3 317.7 889.4 318.1 888.8 319.1 888.7 319 888.6 318.6 888.2 317.7 888.1 317.4 888 317.2 888.2 316.8 888.5 316.6 888.8 316.7 Z"
            id="ES"
            name="Canary Islands (Spain)"
            fill={visitedCountries.includes('ES') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 912.9 314.7 912.9 315.1 912.7 315.6 912 316.1 911.5 316.2 911.1 316.7 910.6 316.5 910.6 316.4 910.8 316 910.8 315.6 911 315.3 911.3 315.1 911.6 315.1 911.9 314.8 912.4 314.8 912.5 314.7 912.7 314.2 912.9 314.1 913.1 314.3 912.9 314.7 Z"
            id="ES"
            name="Canary Islands (Spain)"
            fill={visitedCountries.includes('ES') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1240.2 583.1l0.2 0.3 0.5 0.2 0 0.3-0.2 0.2 0.1 0.2-0.3 0.6 0.1 0.2-0.3 0.1-0.2-0.3 0-0.3 0.2-0.2-0.2-0.7-0.1-0.1-0.1-0.2 0.3-0.3z"
            id="YT"
            name="Mayotte"
            fill={visitedCountries.includes('YT') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M1295 635.8l0.4 0 0.4 0.2 0.3 0.3 0 0.3 0.1 0.5 0.3 0.2 0.2 0.2 0.1 0.2-0.2 0.6-0.1 0.4-0.2 0.2-0.4 0.1-0.9 0-0.2-0.2-0.8-0.4-0.3-0.5 0-0.3-0.3-0.6 0.1-0.4 0.2-0.2 0.2-0.4 0.1 0 0.5-0.2 0.5 0z"
            id="RE"
            name="Reunion"
            fill={visitedCountries.includes('RE') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 643 399.9 642.7 399.9 642.5 399.5 642.6 399.3 642.9 399 643.2 399.2 643.3 399.5 643.3 399.7 643 399.9 Z"
            id="GP"
            name="Guadeloupe"
            fill={visitedCountries.includes('GP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 641.2 397.3 641.5 397.3 641.5 397.5 641.5 397.6 641.3 397.7 641.3 398.5 641.3 398.9 641.1 399.1 640.5 399.4 640.5 399.2 640.3 399 640.2 398.5 640.2 398 640.1 397.5 640.1 397.2 640.3 396.9 640.6 396.8 641.1 397.1 641.2 397.3 Z"
            id="GP"
            name="Guadeloupe"
            fill={visitedCountries.includes('GP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 642.6 396.9 643 397 643.5 397.4 642.2 397.7 641.9 397.8 641.5 397.5 641.6 396.9 641.8 396.8 641.7 396.2 641.8 396 642.1 395.8 642.4 396.2 642.4 396.6 642.6 396.9 Z"
            id="GP"
            name="Guadeloupe"
            fill={visitedCountries.includes('GP') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1989.1 624.9 1988.8 625 1988.9 624.6 1989.1 624.9 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1981.6 623.3 1981.8 623.5 1982.1 623.6 1982.1 623.9 1981.6 624.1 1981.1 623.8 1980.6 624.1 1980.3 624.1 1980.1 624.4 1980.2 624.7 1979.8 624.6 1979.7 624.8 1979.3 624.7 1979.2 624.8 1978.8 624.6 1979.1 624.5 1979.3 624.4 1979.5 624.2 1979.9 624.3 1980.2 624 1980.4 623.7 1980.9 623.6 1981.4 623.3 1981.6 623.3 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1982.5 623.2 1982.3 623.3 1982.1 623.2 1982.3 623 1982.5 623.2 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1988.4 617.1 1988.5 617.6 1988.3 618.2 1988.2 618 1988.1 617.6 1987.9 617.6 1988 617.1 1988.2 617 1988.4 617.1 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1985.8 615.7 1985.7 615.7 1985.6 615.3 1985.8 615.1 1986.2 615 1986.2 615.4 1986 615.6 1985.8 615.7 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1983.6 613.2 1983.5 613.6 1983.8 613.8 1983.9 614.1 1984.2 614.5 1984.5 614.6 1984.6 614.9 1984.8 614.9 1984.9 615.3 1984.6 615.8 1984.7 616 1984.8 616.5 1984.5 616.7 1984.5 617.2 1984.7 617.2 1984.8 617.7 1984.5 618 1983.9 618.2 1983.8 618 1983.5 618.1 1983.4 618.3 1983.1 618 1982.3 618.3 1981.5 619 1981.2 618.9 1980.8 619.1 1980.5 619 1979.9 619.1 1979.6 618.9 1978.7 618.6 1978.4 618.5 1977.8 618.4 1977.6 618.3 1977.1 618.1 1976.9 617.1 1977.2 616.4 1977.5 616.4 1977.8 616.3 1977.9 615.8 1978.2 615.7 1978.3 615.3 1978.1 615.1 1978.7 614.7 1979.1 614.2 1979.2 614.3 1979.8 613.8 1980 613.8 1980.9 613.4 1981.5 613.6 1981.8 613.5 1982.3 613.3 1982.9 613.2 1983.2 612.9 1983.6 613.2 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1989.9 613.4 1989.7 613.5 1989.9 612.6 1990.3 612.6 1990.2 613 1989.9 613.4 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1978.5 611.4 1978.3 611.7 1977.8 612 1977.8 611.7 1978.2 611.3 1978.5 611.4 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1993.4 611 1993.2 610.8 1993.3 610.6 1993.8 610.1 1994.1 609.6 1993.8 610.7 1993.4 611 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <path
            d="M 1994.4 606 1994 606.4 1993.2 607.5 1992.9 607.6 1992.2 608 1992 608.6 1991.6 608.8 1991.4 609.1 1991.3 609.3 1991.6 609.4 1992.2 609.1 1992.3 609 1992.6 608.7 1992.8 608.4 1993.4 608.1 1993.7 607.8 1994.3 607.5 1994.3 607.8 1993.8 608.5 1993.6 608.6 1993.7 609.2 1993.4 609.5 1993.1 609.2 1992.7 609.2 1992.2 609.3 1991.8 609.6 1991.1 609.7 1990.1 609.7 1990.6 609.2 1990.2 609 1989.6 609.2 1989.2 609.4 1989.2 609.6 1988.9 609.7 1988.7 609.8 1988.6 610.2 1988.4 610.5 1988.1 610.4 1988.1 610.2 1987.7 610.1 1987.3 610.3 1987.1 610.8 1986.8 611 1986.5 611 1986.5 610.7 1986.5 610.3 1986.3 609.9 1986.4 609.7 1986.3 609.6 1985.7 609.8 1985.7 609.4 1986.1 609.1 1986.2 609.1 1986.1 608.6 1986.4 608.5 1986.9 608.8 1987.5 608.4 1987.7 608.4 1988 608.1 1988.2 608.1 1988.5 607.8 1988.5 607.6 1989.3 607.5 1990.2 607.2 1990.5 607.1 1990.9 607.2 1991.4 607 1991.6 606.6 1991.8 606.6 1992 606.2 1992.4 606.3 1992.5 606.1 1992.7 606.2 1993.7 605.7 1993.8 606 1994 605.9 1994.2 606 1994.5 605.7 1995 605.5 1995.1 605.6 1994.6 606 1994.4 606 Z"
            id="FJ"
            name="Fiji"
            fill={visitedCountries.includes('FJ') ? '#00FFC2' : ''}
            onClick={(e) => handleCurrentCountry(e)}
            onMouseEnter={(e) => handleCountryLabel(e)}
            onMouseLeave={(e) => handleHideCountryLabel(e)}
          />
          <circle cx="997.9" cy="189.1" id="0" fill="red" />
          <circle cx="673.5" cy="724.1" id="1" fill="red" />
          <circle cx="1798.2" cy="719.3" id="2" fill="red" />
        </g>
      </svg>
    </>
  );
};

export default WorldMap;
