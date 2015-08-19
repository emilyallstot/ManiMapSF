$(function(){
	 var currencies = [
		{ value: 'Nail Care by Theresa', data: 'salons/nail-care-by-theresa-san-francisco' },
		{ value: 'Zaya Nail Spa', data: 'salons/zaya-nail-spa-san-francisco' },
		{ value: 'Lian Nails', data: 'salons/lian-nails-san-francisco' },
		{ value: 'Cole Valley Salon', data: 'salons/cole-valley-salon-san-francisco' },
		{ value: 'Sally Nail Spa', data: 'salons/sally-nail-spa-san-francisco-2' },
		{ value: 'Vaso\'s Hair Design At West Portal', data: 'salons/vasos-hair-design-at-west-portal-san-francisco' },
		{ value: 'Parlor', data: 'salons/parlor-san-francisco-3' },
		{ value: 'Jolie Nails', data: 'salons/jolie-nails-san-francisco' },
		{ value: 'Mani-Pedi by Sandra', data: 'salons/mani-pedi-by-sandra-san-francisco-2' },
		{ value: 'Top Nails', data: 'salons/top-nails-san-francisco' },
		{ value: 'First Nails', data: 'salons/first-nails-san-francisco' },
		{ value: 'Q Spa', data: 'salons/q-spa-san-francisco' },
		{ value: 'KT Nails', data: 'salons/kt-nails-san-francisco-3' },
		{ value: 'A.T. Beauty Spa', data: 'salons/a-t-beauty-spa-san-francisco' },
		{ value: 'Dynasty Nail', data: 'salons/dynasty-nail-san-francisco' },
		{ value: 'Perfect Fingers', data: 'salons/perfect-fingers-san-francisco-2' },
		{ value: 'Golden Nails', data: 'salons/golden-nails-san-francisco' },
		{ value: 'AB Beauty Salon', data: 'salons/ab-beauty-salon-san-francisco' },
		{ value: 'Veer & Wander', data: 'salons/veer-and-wander-san-francisco' },
		{ value: 'Nails-N-Perfect', data: 'salons/nails-n-perfect-san-francisco-2' },
		{ value: 'Orchid Nail Salon', data: 'salons/orchid-nail-salon-san-francisco' },
		{ value: 'La Belle Nail Spa', data: 'salons/la-belle-nail-spa-san-francisco' },
		{ value: 'Ele Ela Nails Salon', data: 'salons/ele-ela-nails-salon-san-francisco-2' },
		{ value: 'White Butterfly Nail & Spa', data: 'salons/white-butterfly-nail-and-spa-san-francisco' },
		{ value: 'La Bella Full Service Salon', data: 'salons/la-bella-full-service-salon-san-francisco' },
		{ value: 'Urania\'s Hand and Foot Essentials', data: 'salons/uranias-hand-and-foot-essentials-san-francisco' },
		{ value: 'Nails N Beauty', data: 'salons/nails-n-beauty-san-francisco' },
		{ value: 'La Vie Nail Spa', data: 'salons/la-vie-nail-spa-san-francisco' },
		{ value: 'Jenny\'s Beauty World', data: 'salons/jennys-beauty-world-san-francisco' },
		{ value: 'Star Lynn Beauty Lounge', data: 'salons/star-lynn-beauty-lounge-san-francisco' },
		{ value: 'Hong Kong Hair Nail Beauty Salon', data: 'salons/hong-kong-hair-nail-beauty-salon-san-francisco' },
		{ value: 'Beauty Company', data: 'salons/beauty-company-san-francisco' },
		{ value: 'Opal Nail Spa', data: 'salons/opal-nail-spa-san-francisco-3' },
		{ value: 'Bernal Heights Nails Care', data: 'salons/bernal-heights-nails-care-san-francisco' },
		{ value: 'Mais Beauty Salon', data: 'salons/mais-beauty-salon-san-francisco' },
		{ value: 'Citi Beauty Skincare', data: 'salons/citi-beauty-skincare-san-francisco' },
		{ value: 'XTD Salon & Spa', data: 'salons/xtd-salon-and-spa-san-francisco' },
		{ value: 'Valencia Nail', data: 'salons/valencia-nail-san-francisco' },
		{ value: 'Mary-Anne Nails & Hair R US', data: 'salons/mary-anne-nails-and-hair-r-us-san-francisco' },
		{ value: 'Taraval Nails', data: 'salons/taraval-nails-san-francisco-2' },
		{ value: 'Marina Nails', data: 'salons/marina-nails-san-francisco' },
		{ value: 'Finishing Touch Nails', data: 'salons/finishing-touch-nails-san-francisco' },
		{ value: 'Just Bloom', data: 'salons/just-bloom-san-francisco' },
		{ value: 'Salon Belle Linda', data: 'salons/salon-belle-linda-san-francisco' },
		{ value: 'Wendy Q Nail Salon', data: 'salons/wendy-q-nail-salon-san-francisco' },
		{ value: 'Fabulous Nails Spa', data: 'salons/fabulous-nails-spa-san-francisco-2' },
		{ value: 'Nails by Linda', data: 'salons/nails-by-linda-san-francisco' },
		{ value: 'Pacific Nails', data: 'salons/pacific-nails-san-francisco' },
		{ value: 'Vanity Beauty Lounge', data: 'salons/vanity-beauty-lounge-san-francisco' },
		{ value: 'Polished By Svetlana', data: 'salons/polished-by-svetlana-san-francisco' },
		{ value: 'Cindy Pro Nails', data: 'salons/cindy-pro-nails-san-francisco' },
		{ value: 'Hand Job', data: 'salons/hand-job-san-francisco' },
		{ value: 'Lily Nail Care', data: 'salons/lily-nail-care-san-francisco' },
		{ value: 'Twenty 89 Hair Design', data: 'salons/twenty-89-hair-design-san-francisco' },
		{ value: 'Shear Image Salon', data: 'salons/shear-image-salon-san-francisco' },
		{ value: 'Cinta Salon', data: 'salons/cinta-salon-san-francisco' },
		{ value: 'Magic Nails', data: 'salons/magic-nails-san-francisco' },
		{ value: 'The I Spa', data: 'salons/the-i-spa-san-francisco' },
		{ value: 'Salon 815', data: 'salons/salon-815-san-francisco' },
		{ value: 'New York Hair & Nail', data: 'salons/new-york-hair-and-nail-san-francisco' },
		{ value: 'Sloane Square Beauty Salon', data: 'salons/sloane-square-beauty-salon-san-francisco-2' },
		{ value: 'New Look Beauty Center', data: 'salons/new-look-beauty-center-san-francisco-2' },
		{ value: 'Zenbi Nails', data: 'salons/zenbi-nails-san-francisco' },
		{ value: 'Cindy Nail Salon', data: 'salons/cindy-nail-salon-san-francisco' },
		{ value: 'V.W. Nail Care', data: 'salons/v-w-nail-care-san-francisco' },
		{ value: 'Thao Nail Studio', data: 'salons/thao-nail-studio-san-francisco' },
		{ value: 'Lily Beauty Salon', data: 'salons/lily-beauty-salon-san-francisco' },
		{ value: 'Nail Today', data: 'salons/nail-today-san-francisco-3' },
		{ value: 'Recharge Medical & Day Spa', data: 'salons/recharge-medical-and-day-spa-san-francisco-3' },
		{ value: 'Five Star Nails and Spa', data: 'salons/five-star-nails-and-spa-san-francisco' },
		{ value: 'Sydney Nail Spa', data: 'salons/sydney-nail-spa-san-francisco' },
		{ value: 'Crystal Nail Spa', data: 'salons/crystal-nail-spa-san-francisco' },
		{ value: 'Modern Nail Bar', data: 'salons/modern-nail-bar-san-francisco' },
		{ value: 'L P Nail Care', data: 'salons/l-p-nail-care-san-francisco' },
		{ value: 'Sunflowers Nails', data: 'salons/sunflowers-nails-san-francisco-2' },
		{ value: 'Flying Beauticians', data: 'salons/flying-beauticians-san-francisco' },
		{ value: 'Neva\'s Beauty', data: 'salons/nevas-beauty-san-francisco-2' },
		{ value: 'CK Hair Design', data: 'salons/ck-hair-design-san-francisco' },
		{ value: 'Zaza Nail Spa', data: 'salons/zaza-nail-spa-san-francisco' },
		{ value: 'The Cutting Edge Salon', data: 'salons/the-cutting-edge-salon-san-francisco' },
		{ value: 'Simply Nails', data: 'salons/simply-nails-san-francisco' },
		{ value: 'Harmony Nail Salon', data: 'salons/harmony-nail-salon-san-francisco-4' },
		{ value: 'Lilyan\'s Beauty Salon', data: 'salons/lilyans-beauty-salon-san-francisco' },
		{ value: 'Nails by Jenny', data: 'salons/nails-by-jenny-san-francisco' },
		{ value: 'Generation Nails', data: 'salons/generation-nails-san-francisco' },
		{ value: 'People Hair & Nail Spa', data: 'salons/people-hair-and-nail-spa-san-francisco' },
		{ value: 'Supreme Hair Cuts', data: 'salons/supreme-hair-cuts-san-francisco' },
		{ value: 'International College of Cosmetology', data: 'salons/international-college-of-cosmetology-san-francisco-2' },
		{ value: 'Sen Beauty Spa', data: 'salons/sen-beauty-spa-san-francisco' },
		{ value: 'Four Seasons Nails And Spa', data: 'salons/four-seasons-nails-and-spa-san-francisco-2' },
		{ value: 'Pampered Nails By Tammy', data: 'salons/pampered-nails-by-tammy-san-francisco' },
		{ value: 'Wild Orchid Nails & Spa', data: 'salons/wild-orchid-nails-and-spa-san-francisco' },
		{ value: 'Queen\'s Nail', data: 'salons/queens-nail-san-francisco' },
		{ value: 'Fairyland Spa', data: 'salons/fairyland-spa-san-francisco-3' },
		{ value: 'Union Nails', data: 'salons/union-nails-san-francisco-2' },
		{ value: 'Minami Beauty Salon', data: 'salons/minami-beauty-salon-san-francisco' },
		{ value: 'Accent On Beauty', data: 'salons/accent-on-beauty-san-francisco' },
		{ value: 'Head to Toes', data: 'salons/head-to-toes-san-francisco' },
		{ value: 'Renaissance Skin Care', data: 'salons/renaissance-skin-care-san-francisco' },
		{ value: 'Hair Help Salon', data: 'salons/hair-help-salon-san-francisco-2' },
		{ value: 'Perfect 10', data: 'salons/perfect-10-san-francisco' },
		{ value: 'Yellow Orchid Nails Spa', data: 'salons/yellow-orchid-nails-spa-san-francisco-2' },
		{ value: 'Citrine Salon', data: 'salons/citrine-salon-san-francisco' },
		{ value: 'Presidio Heights Salon', data: 'salons/presidio-heights-salon-san-francisco' },
		{ value: 'Creative Nails', data: 'salons/creative-nails-san-francisco' },
		{ value: 'Snap Nails', data: 'salons/snap-nails-san-francisco' },
		{ value: 'Belli Capelli Aromatherapy Salon & Day Spa', data: 'salons/belli-capelli-aromatherapy-salon-and-day-spa-san-francisco' },
		{ value: 'City Famous Spa', data: 'salons/city-famous-spa-san-francisco' },
		{ value: 'Nail Pretty', data: 'salons/nail-pretty-san-francisco' },
		{ value: 'Sugarcoat', data: 'salons/sugarcoat-san-francisco' },
		{ value: 'Yaquesita\'s Nails Studio', data: 'salons/yaquesitas-nails-studio-san-francisco' },
		{ value: 'Noe Valley Nails', data: 'salons/noe-valley-nails-san-francisco' },
		{ value: 'Sunrise Nail & Facial', data: 'salons/sunrise-nail-and-facial-san-francisco' },
		{ value: 'Burke Williams Day Spa', data: 'salons/burke-williams-day-spa-san-francisco-2' },
		{ value: 'Charmante', data: 'salons/charmante-san-francisco' },
		{ value: 'Fingertips Nail Salon', data: 'salons/fingertips-nail-salon-san-francisco' },
		{ value: 'Alifa Wong Beauty & Bridal', data: 'salons/alifa-wong-beauty-and-bridal-san-francisco' },
		{ value: 'Tnails', data: 'salons/tnails-san-francisco' },
		{ value: 'Nails For You', data: 'salons/nails-for-you-san-francisco' },
		{ value: 'High Touch Nail & Salon', data: 'salons/high-touch-nail-and-salon-san-francisco' },
		{ value: 'Bijou Nail Salon', data: 'salons/bijou-nail-salon-san-francisco' },
		{ value: 'Roseate Girl', data: 'salons/roseate-girl-san-francisco-2' },
		{ value: 'Milk +', data: 'salons/milk-san-francisco-2' },
		{ value: 'TopCoat Nail Studio', data: 'salons/topcoat-nail-studio-san-francisco-2' },
		{ value: 'West Coast Nails and Facial', data: 'salons/west-coast-nails-and-facial-san-francisco' },
		{ value: 'Two Sisters', data: 'salons/two-sisters-san-francisco' },
		{ value: 'Nova Nail Spa', data: 'salons/nova-nail-spa-san-francisco' },
		{ value: '7 Nail Spa', data: 'salons/7-nail-spa-san-francisco-2' },
		{ value: 'Kiaras Beauty Salon', data: 'salons/kiaras-beauty-salon-san-francisco' },
		{ value: 'Tiptoes', data: 'salons/tiptoes-san-francisco' },
		{ value: 'Beach Beauty Salon', data: 'salons/beach-beauty-salon-san-francisco' },
		{ value: 'Sassi Beauty Salon', data: 'salons/sassi-beauty-salon-san-francisco' },
		{ value: 'Lucky Nails', data: 'salons/lucky-nails-san-francisco-4' },
		{ value: 'Nails by Vera', data: 'salons/nails-by-vera-san-francisco' },
		{ value: 'Church Nails', data: 'salons/church-nails-san-francisco' },
		{ value: 'Finest Nails II', data: 'salons/finest-nails-ii-san-francisco' },
		{ value: 'Descend Salon', data: 'salons/descend-salon-san-francisco' },
		{ value: 'Zen Beauty Spa', data: 'salons/zen-beauty-spa-san-francisco-2' },
		{ value: 'Empress Hair and Nails', data: 'salons/empress-hair-and-nails-san-francisco' },
		{ value: 'Center Nails', data: 'salons/center-nails-san-francisco' },
		{ value: 'Misa\'s Nails', data: 'salons/misas-nails-san-francisco' },
		{ value: 'Sutter Nails', data: 'salons/sutter-nails-san-francisco' },
		{ value: 'Cute T Nails', data: 'salons/cute-t-nails-san-francisco' },
		{ value: 'Town & Country Beauty Salon', data: 'salons/town-and-country-beauty-salon-san-francisco' },
		{ value: 'Artistic Nail Care', data: 'salons/artistic-nail-care-san-francisco' },
		{ value: 'Nails By Nancy', data: 'salons/nails-by-nancy-san-francisco' },
		{ value: 'Zen Day Spa', data: 'salons/zen-day-spa-san-francisco' },
		{ value: 'It\'s All About You Salon', data: 'salons/its-all-about-you-salon-san-francisco' },
		{ value: 'Nail Chic', data: 'salons/nail-chic-san-francisco-2' },
		{ value: 'D Salon', data: 'salons/d-salon-san-francisco' },
		{ value: 'Lady Gold Fingers', data: 'salons/lady-gold-fingers-san-francisco-2' },
		{ value: 'Rendez-Vous Nails', data: 'salons/rendez-vous-nails-san-francisco' },
		{ value: 'Sidney Nails', data: 'salons/sidney-nails-san-francisco' },
		{ value: 'West Coast Beauty Nails', data: 'salons/west-coast-beauty-nails-san-francisco' },
		{ value: 'Sunset Beauty Care', data: 'salons/sunset-beauty-care-san-francisco' },
		{ value: 'Ultimate Hair & Face Figure Salon', data: 'salons/ultimate-hair-and-face-figure-salon-san-francisco' },
		{ value: 'Tootsie Toes', data: 'salons/tootsie-toes-san-francisco' },
		{ value: 'Lilypad Spa', data: 'salons/lilypad-spa-san-francisco' },
		{ value: 'Trio Nails', data: 'salons/trio-nails-san-francisco' },
		{ value: 'Tina\'s Nails', data: 'salons/tinas-nails-san-francisco' },
		{ value: 'Franklin Beauty Salon', data: 'salons/franklin-beauty-salon-san-francisco' },
		{ value: 'Nice Studio', data: 'salons/nice-studio-san-francisco' },
		{ value: 'Sally\'s Salon', data: 'salons/sallys-salon-san-francisco' },
		{ value: 'Artistic Nails & Spa', data: 'salons/artistic-nails-and-spa-san-francisco' },
		{ value: 'Juicy Nails', data: 'salons/juicy-nails-san-francisco' },
		{ value: 'Betty Beauty Care', data: 'salons/betty-beauty-care-san-francisco' },
		{ value: 'Yvonne Nails', data: 'salons/yvonne-nails-san-francisco' },
		{ value: 'SHE-SHE Nail Salon', data: 'salons/she-she-nail-salon-san-francisco' },
		{ value: 'Tiptoes Union Square', data: 'salons/tiptoes-union-square-san-francisco' },
		{ value: 'Chic Nails Salon', data: 'salons/chic-nails-salon-san-francisco' },
		{ value: 'New Age Nails', data: 'salons/new-age-nails-san-francisco-2' },
		{ value: '7 Nails', data: 'salons/7-nails-san-francisco-2' },
		{ value: 'Qua The Spa at Soma Grand', data: 'salons/qua-the-spa-at-soma-grand-san-francisco-2' },
		{ value: 'Salon Mark Carlos', data: 'salons/salon-mark-carlos-san-francisco' },
		{ value: 'My Nails', data: 'salons/my-nails-san-francisco' },
		{ value: 'Mahogany House of Styles', data: 'salons/mahogany-house-of-styles-san-francisco-2' },
		{ value: 'Doan\'s Nails', data: 'salons/doans-nails-san-francisco' },
		{ value: 'New French Nails', data: 'salons/new-french-nails-san-francisco-2' },
		{ value: 'Germaine Nail', data: 'salons/germaine-nail-san-francisco' },
		{ value: 'Hand Touch Nails Care', data: 'salons/hand-touch-nails-care-san-francisco' },
		{ value: 'Crystal Nail', data: 'salons/crystal-nail-san-francisco' },
		{ value: 'Haight Street Nails', data: 'salons/haight-street-nails-san-francisco' },
		{ value: 'Happy Nails', data: 'salons/happy-nails-san-francisco' },
		{ value: 'LaBelle Day Spas & Salons', data: 'salons/labelle-day-spas-and-salons-san-francisco' },
		{ value: 'Sunshine Nails', data: 'salons/sunshine-nails-san-francisco' },
		{ value: 'Nob Hill Spa', data: 'salons/nob-hill-spa-san-francisco' },
		{ value: 'Michelle Nails No 2.', data: 'salons/michelle-nails-no-2-san-francisco' },
		{ value: 'Little Saigon Hair & Nails Salon', data: 'salons/little-saigon-hair-and-nails-salon-san-francisco' },
		{ value: 'The New Nails', data: 'salons/the-new-nails-san-francisco-4' },
		{ value: 'Shua\'s Nails', data: 'salons/shuas-nails-san-francisco' },
		{ value: 'Kathy\'s Nails', data: 'salons/kathys-nails-san-francisco' },
		{ value: 'Angel\'s Nails', data: 'salons/angels-nails-san-francisco' },
		{ value: 'High Class Nails', data: 'salons/high-class-nails-san-francisco' },
		{ value: 'LV Nail Spa', data: 'salons/lv-nail-spa-san-francisco-2' },
		{ value: 'Nora Spa & Salon', data: 'salons/nora-spa-and-salon-san-francisco' },
		{ value: 'Angel\'s Nail Salon', data: 'salons/angels-nail-salon-san-francisco' },
		{ value: 'Joy Joy Nail', data: 'salons/joy-joy-nail-san-francisco' },
		{ value: 'Atelier Emmanuel Salon and Day Spa', data: 'salons/atelier-emmanuel-salon-and-day-spa-san-francisco' },
		{ value: 'Super Nails & Spa', data: 'salons/super-nails-and-spa-san-francisco' },
		{ value: 'Tip Top Nails', data: 'salons/tip-top-nails-san-francisco' },
		{ value: 'Beautiful Nails', data: 'salons/beautiful-nails-san-francisco' },
		{ value: 'BellaDonna Nail Salon', data: 'salons/belladonna-nail-salon-san-francisco' },
		{ value: 'Good Nails', data: 'salons/good-nails-san-francisco' },
		{ value: 'Pretty Parlor', data: 'salons/pretty-parlor-san-francisco-4' },
		{ value: 'Creative Nail Care', data: 'salons/creative-nail-care-san-francisco' },
		{ value: 'Studio 800 Salon', data: 'salons/studio-800-salon-san-francisco' },
		{ value: 'Episode Salon & Spa', data: 'salons/episode-salon-and-spa-san-francisco' },
		{ value: 'Lisa\'s Beauty Salon', data: 'salons/lisas-beauty-salon-san-francisco-2' },
		{ value: 'Four Seasons Nails & Tanning', data: 'salons/four-seasons-nails-and-tanning-san-francisco' },
		{ value: 'Bayview Nail Care', data: 'salons/bayview-nail-care-san-francisco' },
		{ value: 'Paradise Nail Spa', data: 'salons/paradise-nail-spa-san-francisco' },
		{ value: 'Color Nails & Skincare', data: 'salons/color-nails-and-skincare-san-francisco' },
		{ value: 'Mademoiselle Nails', data: 'salons/mademoiselle-nails-san-francisco' },
		{ value: 'Forever Nails By Kim', data: 'salons/forever-nails-by-kim-san-francisco' },
		{ value: 'W L Salon', data: 'salons/w-l-salon-san-francisco' },
		{ value: 'Kitty\'s Nails', data: 'salons/kittys-nails-san-francisco' },
		{ value: 'A.T Beauty Salon', data: 'salons/a-t-beauty-salon-san-francisco' },
		{ value: 'Spa Natural', data: 'salons/spa-natural-san-francisco' },
		{ value: 'Face It Salon & Spa', data: 'salons/face-it-salon-and-spa-san-francisco' },
		{ value: 'Kim\'s Pro Nails', data: 'salons/kims-pro-nails-san-francisco' },
		{ value: 'Lee Nail Care', data: 'salons/lee-nail-care-san-francisco' },
		{ value: 'L & T Salon', data: 'salons/l-and-t-salon-san-francisco' },
		{ value: 'Salon DnA', data: 'salons/salon-dna-san-francisco-4' },
		{ value: 'California Salon', data: 'salons/california-salon-san-francisco' },
		{ value: 'Portola Nail Bar', data: 'salons/portola-nail-bar-san-francisco' },
		{ value: 'Top Ten Nails', data: 'salons/top-ten-nails-san-francisco' },
		{ value: 'Ai Rose Spa', data: 'salons/ai-rose-spa-san-francisco' },
		{ value: 'Tena Pro Nails', data: 'salons/tena-pro-nails-san-francisco' },
		{ value: 'Castro Nail Salon', data: 'salons/castro-nail-salon-san-francisco' },
		{ value: 'Lakeshore Nails', data: 'salons/lakeshore-nails-san-francisco' },
		{ value: 'Bella Tu', data: 'salons/bella-tu-san-francisco' },
		{ value: 'Cinta Aveda Institute', data: 'salons/cinta-aveda-institute-san-francisco' },
		{ value: 'Zen Beauty Spa', data: 'salons/zen-beauty-spa-san-francisco' },
		{ value: 'Pretty Nails', data: 'salons/pretty-nails-san-francisco' },
		{ value: 'Nails by Lavinia', data: 'salons/nails-by-lavinia-san-francisco' },
		{ value: 'Mimi Hair & Nail Design', data: 'salons/mimi-hair-and-nail-design-san-francisco' },
		{ value: 'Queen Bee Nail Salon', data: 'salons/queen-bee-nail-salon-san-francisco' },
		{ value: 'Americut/May\'s Nail Spa', data: 'salons/americut-mays-nail-spa-san-francisco' },
		{ value: 'Fekaso Hair Salon', data: 'salons/fekaso-hair-salon-san-francisco-2' },
		{ value: 'Divisadero Nails', data: 'salons/divisadero-nails-san-francisco' },
		{ value: 'Natural Beauty Salon', data: 'salons/natural-beauty-salon-san-francisco' },
		{ value: 'Silk Nail Salon', data: 'salons/silk-nail-salon-san-francisco' },
		{ value: 'Nails by Lisa', data: 'salons/nails-by-lisa-san-francisco' },
		{ value: 'Mani Pedi Spa', data: 'salons/mani-pedi-spa-san-francisco-2' },
		{ value: 'LA Touched Salon', data: 'salons/la-touched-salon-san-francisco' },
		{ value: 'The Pampered Girl', data: 'salons/the-pampered-girl-san-francisco-2' },
		{ value: 'Lucy\'s Pro Nails', data: 'salons/lucys-pro-nails-san-francisco' },
		{ value: 'American Pro Nails', data: 'salons/american-pro-nails-san-francisco' },
		{ value: 'Sanctuary Spa at Bay Club of San Francisco', data: 'salons/sanctuary-spa-at-bay-club-of-san-francisco-san-francisco' },
		{ value: 'Lotus Foot Care At Home', data: 'salons/lotus-foot-care-at-home-san-francisco' },
		{ value: 'Salon de Union', data: 'salons/salon-de-union-san-francisco-2' },
		{ value: 'Thi Spa & Nails', data: 'salons/thi-spa-and-nails-san-francisco' },
		{ value: 'Julies Beauty Salon', data: 'salons/julies-beauty-salon-san-francisco' },
		{ value: 'Synergy Salon', data: 'salons/synergy-salon-san-francisco' },
		{ value: 'London Lass Beauty Salon', data: 'salons/london-lass-beauty-salon-san-francisco' },
		{ value: 'JT Nails', data: 'salons/jt-nails-san-francisco' },
		{ value: 'Joseph Cozza Salon', data: 'salons/joseph-cozza-salon-san-francisco' },
		{ value: 'Sol Y Luna Spa', data: 'salons/sol-y-luna-spa-san-francisco' },
		{ value: 'Daily Beauty Salon & Spa', data: 'salons/daily-beauty-salon-and-spa-san-francisco' },
		{ value: 'Natural Salon', data: 'salons/natural-salon-san-francisco' },
		{ value: 'Beauty for You', data: 'salons/beauty-for-you-san-francisco' },
		{ value: 'Sally Nail Spa', data: 'salons/sally-nail-spa-san-francisco' },
		{ value: 'Helen\'s Nails', data: 'salons/helens-nails-san-francisco' },
		{ value: 'Carlton Hair', data: 'salons/carlton-hair-san-francisco' },
		{ value: 'San Francisco Beauty Lounge', data: 'salons/san-francisco-beauty-lounge-san-francisco' },
		{ value: 'Donna\'s Nails', data: 'salons/donnas-nails-san-francisco' },
		{ value: 'San Zen Nails', data: 'salons/san-zen-nails-san-francisco' },
		{ value: 'Lombard Nail Spa', data: 'salons/lombard-nail-spa-san-francisco-3' },
		{ value: 'Prim Salon', data: 'salons/prim-salon-san-francisco' },
		{ value: 'Nail Arts', data: 'salons/nail-arts-san-francisco' },
		{ value: 'Sandy Nails', data: 'salons/sandy-nails-san-francisco' },
		{ value: 'Mimi Salon', data: 'salons/mimi-salon-san-francisco' },
		{ value: 'Elizabeth Hair Studio', data: 'salons/elizabeth-hair-studio-san-francisco-3' },
		{ value: 'La Fleur 2', data: 'salons/la-fleur-2-san-francisco-2' },
		{ value: 'Teresita Nail Spa', data: 'salons/teresita-nail-spa-san-francisco' },
		{ value: 'Le Trend Nail Salon', data: 'salons/le-trend-nail-salon-san-francisco' },
		{ value: 'Nail Fantasy', data: 'salons/nail-fantasy-san-francisco' },
		{ value: 'Mak & Co', data: 'salons/mak-and-co-san-francisco' },
		{ value: 'Bamboo', data: 'salons/bamboo-san-francisco' },
		{ value: 'Kim Etc Nail Care', data: 'salons/kim-etc-nail-care-san-francisco' },
		{ value: 'Relax Nails', data: 'salons/relax-nails-san-francisco' },
		{ value: 'Yzinn Nail Club', data: 'salons/yzinn-nail-club-san-francisco-3' },
		{ value: 'Ciao Bella Nails', data: 'salons/ciao-bella-nails-san-francisco' },
		{ value: 'Love Cheni The Beauty Boutique', data: 'salons/love-cheni-the-beauty-boutique-san-francisco' },
		{ value: 'Good Looks Salon', data: 'salons/good-looks-salon-san-francisco' },
		{ value: 'White Daisy Nail Spa', data: 'salons/white-daisy-nail-spa-san-francisco' },
		{ value: 'Annie\'s Deluxe Home Nail Care', data: 'salons/annies-deluxe-home-nail-care-san-francisco' },
		{ value: 'Miracle Spa', data: 'salons/miracle-spa-san-francisco' },
		{ value: 'Post Street Hair & Nail Care', data: 'salons/post-street-hair-and-nail-care-san-francisco' },
		{ value: 'Blend Salon', data: 'salons/blend-salon-san-francisco' },
		{ value: 'Bella Nails', data: 'salons/bella-nails-san-francisco' },
		{ value: 'West Portal Spa', data: 'salons/west-portal-spa-san-francisco' },
		{ value: 'The Girls\' Lounge', data: 'salons/the-girls-lounge-san-francisco' },
		{ value: 'King Nails', data: 'salons/king-nails-san-francisco' },
		{ value: 'Elegant Nails Salon', data: 'salons/elegant-nails-salon-san-francisco' },
		{ value: 'Lavande Nail Spa', data: 'salons/lavande-nail-spa-san-francisco' },
		{ value: 'Katie\'s Nails', data: 'salons/katies-nails-san-francisco' },
		{ value: 'Nancy\'s Hair and Nails', data: 'salons/nancys-hair-and-nails-san-francisco' },
		{ value: 'Nails 2001', data: 'salons/nails-2001-san-francisco' },
		{ value: 'Star Nails', data: 'salons/star-nails-san-francisco' },
		{ value: 'Linda Ocean Nails', data: 'salons/linda-ocean-nails-san-francisco' },
		{ value: 'Finest Nails', data: 'salons/finest-nails-san-francisco' },
		{ value: 'The Final Touch 2', data: 'salons/the-final-touch-2-san-francisco-2' },
		{ value: 'Marinello Schools of Beauty', data: 'salons/marinello-schools-of-beauty-san-francisco' },
		{ value: 'One Stop Beauty Supply and Salon', data: 'salons/one-stop-beauty-supply-and-salon-san-francisco-2' },
		{ value: 'Phuong Nail Station', data: 'salons/phuong-nail-station-san-francisco' },
		{ value: 'Lyn \'s Nail Care', data: 'salons/lyn-s-nail-care-san-francisco' },
		{ value: 'Hokus Pokus Salon', data: 'salons/hokus-pokus-salon-san-francisco' },
		{ value: 'Gelous Nails', data: 'salons/gelous-nails-san-francisco' },
		{ value: 'Momo Nails Salon', data: 'salons/momo-nails-salon-san-francisco' },
		{ value: 'Rosy Heels', data: 'salons/rosy-heels-san-francisco' },
		{ value: 'T & T Nails', data: 'salons/t-and-t-nails-san-francisco' },
		{ value: 'Joys Hair Salon', data: 'salons/joys-hair-salon-san-francisco' },
		{ value: 'Pearly Nails', data: 'salons/pearly-nails-san-francisco-2' },
		{ value: 'Victoria\'s Nail Studio', data: 'salons/victorias-nail-studio-san-francisco' },
		{ value: 'Manicure & Pedicure By Nancy', data: 'salons/manicure-and-pedicure-by-nancy-san-francisco' },
		{ value: 'The Tidy Shoppe', data: 'salons/the-tidy-shoppe-san-francisco-2' },
		{ value: 'Silky Touch Nail Salon', data: 'salons/silky-touch-nail-salon-san-francisco' },
		{ value: 'Citi Beauty Skin Care', data: 'salons/citi-beauty-skin-care-san-francisco' },
		{ value: 'Urban Beauty Spa', data: 'salons/urban-beauty-spa-san-francisco' },
		{ value: 'Glow Hand and Foot Spa', data: 'salons/glow-hand-and-foot-spa-san-francisco' },
		{ value: 'Cortland Nails Salon', data: 'salons/cortland-nails-salon-san-francisco' },
		{ value: 'Laurel Heights Nail Salon', data: 'salons/laurel-heights-nail-salon-san-francisco' },
		{ value: 'Minna Nails', data: 'salons/minna-nails-san-francisco-3' },
		{ value: 'Mini Nails', data: 'salons/mini-nails-san-francisco' },
		{ value: 'Diane\'s Nail Care', data: 'salons/dianes-nail-care-san-francisco-3' },
		{ value: 'Sydney Nails', data: 'salons/sydney-nails-san-francisco' },
		{ value: 'Hi-Tech Nails', data: 'salons/hi-tech-nails-san-francisco' },
		{ value: 'Sparkle San Francisco', data: 'salons/sparkle-san-francisco-san-francisco-3' },
		{ value: 'Natural Nails', data: 'salons/natural-nails-san-francisco' },
		{ value: 'Q Lotus Salon', data: 'salons/q-lotus-salon-san-francisco' },
		{ value: 'Lido Nails', data: 'salons/lido-nails-san-francisco' },
		{ value: 'San Bruno Nails', data: 'salons/san-bruno-nails-san-francisco' },
		{ value: 'Dolci Beauty Lounge', data: 'salons/dolci-beauty-lounge-san-francisco-2' },
		{ value: 'Cherish', data: 'salons/cherish-san-francisco-2' },
		{ value: 'Gloss \'n Glam', data: 'salons/gloss-n-glam-san-francisco' },
		{ value: 'American Beauty Salon Nails by Anna', data: 'salons/american-beauty-salon-nails-by-anna-san-francisco' },
		{ value: 'Pampered Hands Salon', data: 'salons/pampered-hands-salon-san-francisco' },
		{ value: 'Lux Salon', data: 'salons/lux-salon-san-francisco' },
		{ value: 'Simply Unique Nails', data: 'salons/simply-unique-nails-san-francisco' },
		{ value: 'Mizu Spa', data: 'salons/mizu-spa-san-francisco' },
		{ value: 'Pink Lotus Nails', data: 'salons/pink-lotus-nails-san-francisco-2' },
		{ value: 'Fancy Fingers & Facials', data: 'salons/fancy-fingers-and-facials-san-francisco' },
		{ value: 'Melon Nail Bar', data: 'salons/melon-nail-bar-san-francisco' },
		{ value: 'Market Nail Spa', data: 'salons/market-nail-spa-san-francisco' },
		{ value: 'Nail Care For You', data: 'salons/nail-care-for-you-san-francisco' },
		{ value: 'Aqua Spa', data: 'salons/aqua-spa-san-francisco' },
		{ value: 'Rumours Hair & Nail Salon', data: 'salons/rumours-hair-and-nail-salon-san-francisco' },
		{ value: 'Utoepia Foot Massage & Nail', data: 'salons/utoepia-foot-massage-and-nail-san-francisco' },
		{ value: 'Nailtastic', data: 'salons/nailtastic-san-francisco-3' },
		{ value: 'Fancy Fingers & Spa', data: 'salons/fancy-fingers-and-spa-san-francisco-2' },
		{ value: 'Unique Design Nails', data: 'salons/unique-design-nails-san-francisco' },
		{ value: 'New Beauty', data: 'salons/new-beauty-san-francisco-2' },
		{ value: 'Spa Nordstrom', data: 'salons/spa-nordstrom-san-francisco' },
		{ value: 'Quince Spa', data: 'salons/quince-spa-san-francisco' },
		{ value: 'Amazing Nails', data: 'salons/amazing-nails-san-francisco-3' },
		{ value: 'Leslie\'s Nails 2', data: 'salons/leslies-nails-2-san-francisco' },
		{ value: 'Lumina European  Nail Salon', data: 'salons/lumina-european-nail-salon-san-francisco' },
		{ value: 'Merry Manicures', data: 'salons/merry-manicures-san-francisco' },
		{ value: 'V Nail Spa', data: 'salons/v-nail-spa-san-francisco' },
		{ value: 'Rainbow Nail Spa', data: 'salons/rainbow-nail-spa-san-francisco-2' },
		{ value: 'Akua Nail Salon', data: 'salons/akua-nail-salon-san-francisco-2' },
		{ value: 'Chris\' Spa', data: 'salons/chris-spa-san-francisco' },
		{ value: 'Glamour Beauty Salon', data: 'salons/glamour-beauty-salon-san-francisco' },
		{ value: 'La Fleur Hair & Nail Spa', data: 'salons/la-fleur-hair-and-nail-spa-san-francisco' },
		{ value: 'Jolie Elegant Spa', data: 'salons/jolie-elegant-spa-san-francisco' },
		{ value: 'City Beauty Salon', data: 'salons/city-beauty-salon-san-francisco' },
		{ value: 'Pure Envy Spa Bar', data: 'salons/pure-envy-spa-bar-san-francisco' },
		{ value: 'Neva\'s Beauty', data: 'salons/nevas-beauty-san-francisco' },
		{ value: 'Perfection Nails Spa', data: 'salons/perfection-nails-spa-san-francisco' },
		{ value: 'Rubis Nails', data: 'salons/rubis-nails-san-francisco' },
		{ value: 'Glen Park Nails', data: 'salons/glen-park-nails-san-francisco' },
		{ value: 'Bliss Spa', data: 'salons/bliss-spa-san-francisco-5' },
		{ value: 'Nail Art House', data: 'salons/nail-art-house-san-francisco-2' },
		{ value: 'Salon 828', data: 'salons/salon-828-san-francisco' },
		{ value: 'San Francisco Institute of Esthetics & Cosmetology', data: 'salons/san-francisco-institute-of-esthetics-and-cosmetology-san-francisco' },
		{ value: 'Lombard Heights Nail Salon', data: 'salons/lombard-heights-nail-salon-san-francisco' },
	];


	$('#autocomplete').autocomplete({
		lookup: currencies,
		onSelect: function (suggestion) {
			location.href = "../" + suggestion.data		}
	});
});