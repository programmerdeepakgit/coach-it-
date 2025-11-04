import { Chapter } from './types';

export const SUBJECTS: { name: 'Physics' | 'Chemistry' | 'Maths'; description: string }[] = [
  { name: 'Physics', description: 'Explore the fundamental principles of the universe, from quantum mechanics to cosmology.' },
  { name: 'Chemistry', description: 'Dive into the world of atoms, molecules, and reactions that form our world.' },
  { name: 'Maths', description: 'Master the language of logic, patterns, and structure with our advanced curriculum.' },
];

export const CHAPTERS: Chapter[] = [
  // =================================================================
  // Physics Class 11
  // =================================================================
  { id: 'p11_01', title: 'Basic Mathematics', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_01/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1672827343979.mp4' },
  { id: 'p11_02', title: 'Units And Measurements', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_02/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1672306815667.mp4' },
  { id: 'p11_03', title: 'Elements Of Vector', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_03/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1671192451561.mp4' },
  { id: 'p11_04', title: 'Motion in a Straight Line', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_04/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1671106920692.mp4' },
  { id: 'p11_05', title: 'Motion in a Plane', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_05/600/400', videoId: 'placeholder_video_id' },
  { id: 'p11_06', title: 'Laws Of Motion Part 1', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_06a/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1672827479578.mp4' },
  { id: 'p11_07', title: 'Laws Of Motion Part 2', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_06b/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1672827602989.mp4' },
  { id: 'p11_08', title: 'Laws Of Motion Part 3 (Excluding Friction)', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_06c/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1699350102173.mp4' },
  { id: 'p11_09', title: 'Circular Motion', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_07/600/400', videoId: 'placeholder_video_id' },
  { id: 'p11_10', title: 'Work, Energy And Power', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_08/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1670329750113.mp4' },
  { id: 'p11_11', title: 'System of Particles and Rotational Motion', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_09/600/400', videoId: 'placeholder_video_id' },
  { id: 'p11_12', title: 'Gravitation Part 1', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_10a/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1670329623987.mp4' },
  { id: 'p11_13', title: 'Gravitation Part 2', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_10b/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1669182250050.mp4' },
  { id: 'p11_14', title: 'Gravitation Part 3', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_10c/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1669182532319.mp4' },
  { id: 'p11_15', title: 'Mechanical Properties Of Solids', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_11/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1670330866657.mp4' },
  { id: 'p11_16', title: 'Mechanical Properties Of Fluids Part 1', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_12a/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1670580059912.mp4' },
  { id: 'p11_17', title: 'Mechanical Properties Of Fluids Part 2', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_12b/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1670579503860.mp4' },
  { id: 'p11_18', title: 'Thermal Properties Of Matter Part 1 (Thermometry)', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_13a/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1699348328081.mp4' },
  { id: 'p11_19', title: 'Thermal Properties Of Matter Part 2 (Expansion of Solid)', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_13b/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1699348869227.mp4' },
  { id: 'p11_20', title: 'Thermal Properties Of Matter Part 3 (Expansion of Liquid)', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_13c/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1699349416011.mp4' },
  { id: 'p11_21', title: 'Thermal Properties Of Matter Part 4', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_13d/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1672137169273.mp4' },
  { id: 'p11_22', title: 'Thermodynamics Part 1', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_14a/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1669197519468.mp4' },
  { id: 'p11_23', title: 'Thermodynamics Part 2', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_14b/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1673348264747.mp4' },
  { id: 'p11_24', title: 'Kinetic Theory', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_15/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1672304045849.mp4' },
  { id: 'p11_25', title: 'Oscillations', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_16/600/400', videoId: 'https://il-cms.infinitylearn.com/media/1670491031998.mp4' },
  { id: 'p11_26', title: 'Waves', course: { subject: 'Physics', class: 11 }, imageUrl: 'https://picsum.photos/seed/p11_17/600/400', videoId: 'placeholder_video_id' },

  // =================================================================
  // Chemistry Class 11
  // =================================================================
  { id: 'c11_01', title: 'Some Basics Concepts Of Chemistry', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_01/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_02', title: 'Structure Of Atom', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_02/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_03', title: 'Classification Of Elements', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_03/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_04', title: 'Chemical Bonding And Molecular Structure', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_04/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_05', title: 'Thermodynamics', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_05/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_06', title: 'Equilibrium', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_06/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_07', title: 'Redox Reaction', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_07/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_08', title: 'The P-block Elements', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_08/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_09', title: 'Organic Chemistry', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_09/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_10', title: 'Hydrocarbons', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_10/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_11', title: 'States Of Matter', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_11/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_12', title: 'Hydrogen', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_12/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_13', title: 'The S-block Elements', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_13/600/400', videoId: 'placeholder_video_id' },
  { id: 'c11_14', title: 'Environmental Chemistry', course: { subject: 'Chemistry', class: 11 }, imageUrl: 'https://picsum.photos/seed/c11_14/600/400', videoId: 'placeholder_video_id' },

  // =================================================================
  // Maths Class 11
  // =================================================================
  { id: 'm11_01', title: 'Fundamentals Of Mathematics', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_01/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_02', title: 'Sets', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_02/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_03', title: 'Relations And Functions', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_03/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_04', title: 'Trigonometric Functions', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_04/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_05', title: 'Trigonometric Equations', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_05/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_06', title: 'Complex Numbers', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_06/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_07', title: 'Quadratic Equations', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_07/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_08', title: 'Permutations And Combinations', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_08/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_09', title: 'Binomial Theorem', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_09/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_10', title: 'Sequences and Series', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_10/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_11', title: 'Introduction Of 2D Geometry', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_11/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_12', title: 'Straight Lines', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_12/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_13', title: 'Pair Of Straight Lines', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_13/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_14', title: 'Circles, Parabola', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_14/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_15', title: 'Ellipse, Hyperbola', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_15/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_16', title: 'Introduction Of 3D Geometry', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_16/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_17', title: 'Limits And Derivatives', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_17/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_18', title: 'Statistics', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_18/600/400', videoId: 'placeholder_video_id' },
  { id: 'm11_19', title: 'Probability', course: { subject: 'Maths', class: 11 }, imageUrl: 'https://picsum.photos/seed/m11_19/600/400', videoId: 'placeholder_video_id' },

  // =================================================================
  // Class 12 Placeholders (Original data preserved)
  // =================================================================
  { id: 'p12_01', title: 'Electric Charges and Fields', course: { subject: 'Physics', class: 12 }, imageUrl: 'https://picsum.photos/seed/p12_01/600/400', videoId: '5mN2D3a9LGA' },
  { id: 'p12_02', title: 'Electrostatic Potential', course: { subject: 'Physics', class: 12 }, imageUrl: 'https://picsum.photos/seed/p12_02/600/400', videoId: 'n_cyB2Yv7a8' },
  { id: 'p12_03', title: 'Current Electricity', course: { subject: 'Physics', class: 12 }, imageUrl: 'https://picsum.photos/seed/p12_03/600/400', videoId: 'A8e8vrv9FNw' },
  { id: 'p12_04', title: 'Moving Charges and Magnetism', course: { subject: 'Physics', class: 12 }, imageUrl: 'https://picsum.photos/seed/p12_04/600/400', videoId: '3NApG-sgoI4' },
  { id: 'c12_01', title: 'The Solid State', course: { subject: 'Chemistry', class: 12 }, imageUrl: 'https://picsum.photos/seed/c12_01/600/400', videoId: 'Ac-sV_A-S4c' },
  { id: 'c12_02', title: 'Solutions', course: { subject: 'Chemistry', class: 12 }, imageUrl: 'https://picsum.photos/seed/c12_02/600/400', videoId: 'uomjB-QAzAE' },
  { id: 'c12_03', title: 'Electrochemistry', course: { subject: 'Chemistry', class: 12 }, imageUrl: 'https://picsum.photos/seed/c12_03/600/400', videoId: 'z-a-oEa3QYw' },
  { id: 'm12_01', title: 'Relations and Functions', course: { subject: 'Maths', class: 12 }, imageUrl: 'https://picsum.photos/seed/m12_01/600/400', videoId: 'f6a0yA1-g5E' },
  { id: 'm12_02', title: 'Inverse Trigonometric Functions', course: { subject: 'Maths', class: 12 }, imageUrl: 'https://picsum.photos/seed/m12_02/600/400', videoId: 'c-n-I45n-vE' },
  { id: 'm12_03', title: 'Matrices', course: { subject: 'Maths', class: 12 }, imageUrl: 'https://picsum.photos/seed/m12_03/600/400', videoId: 'k7199wD3hR8' },
];
